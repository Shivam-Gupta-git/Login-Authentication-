import { User } from "../model/user.model.js";
import bcrypt from 'bcrypt'
import { verifyEmail } from "../verifyEmail/verifyEmail.js";
import jwt from 'jsonwebtoken'
import { Session } from "../model/session.model.js";
import { sendOtpMail } from "../verifyEmail/sendOtpMail.js";

export const userRegistration = async (req, res) => {
  try {
    const {userName, email, password} = req.body;
    if(
      [userName, email, password].some((fields) => !fields || fields?.trim() === '')){
        res.status(400).json({success: false, message: 'all fileds should be required'})
      }

      const userExisted = await User.findOne({
        $or: [{email}]
      })
      if(userExisted){
        res.status(400).json({success: false, message: 'user allready exist',})
      }

      const hashedPassword = await bcrypt.hash(password, 11);

      const newUser = await User.create({
        userName,
        email,
        password: hashedPassword,
      })
      
      const token = jwt.sign({id: newUser._id}, process.env.SECRET_KET, {expiresIn: '1d'});
      
      verifyEmail(email, token);
      
      newUser.token = token;
      
      await newUser.save();
      res.status(200).json({success: true, message: 'user registration successful', data: newUser});
  } catch (error) {
    return res.status(500).json({success: false, message: error.message});
  }
}

export const verification = async (req, res) => {
 try {
  const authHeader = req.headers.authorization;
  if(!authHeader || !authHeader.startsWith('Bearer ')){
    return res.status(400).json({success: false, message: 'Authorization token is missing or Invalid'})
  }

  const token = authHeader.split(' ')[1];
  
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.SECRET_KET)
    // console.log(decoded);
  } catch (error) {
    if(error.name === "TokenExpiredError"){
     return res.status(400).json({success: false, message: 'this registration token has expired'})
    }
     return res.status(400).json({success: false, message: 'token verification is failed'})
  }

  const user = await User.findById(decoded.id);
  if(!user){
    return res.status(404).json({success: false, message: 'used not found'})
  }


  user.token = null;
  user.isVerified = true
  await user.save()

  return res.status(200).json({success: true, message: 'email verified successfully'})
 } catch (error) {
  return res.status(500).json({success: false, message: error.message})
 }
}

export const userLogin = async (req, res) => {
  try {
    const {email, password} = req.body;
    if(
      [email, password].some((field) => !field || field?.trim() === "")
    ){
      return res.status(400).json({success: false, message: 'all fields should be reqiured'})
    }
  
    const regeteredUser = await User.findOne({email})
    if(!regeteredUser){
      return res.json(401).json({success: false, message: 'user does not exist'})
    }
  
    const checkPassword = await bcrypt.compare(password, regeteredUser.password);
    if(!checkPassword){
      return res.status(402).json({success: false, message: 'Incorrect Password'})
    }
    
    // check user is verify or not
    if(regeteredUser.isVerified !== true){
     return res.status(400).json({success: false, message: 'go and verify your account'})
    }
  
    // check existing session or delete it
    const existingSession = await Session.findOne({userId: regeteredUser._id})
    if(existingSession){
      await Session.deleteOne({userId: regeteredUser._id})
    }
  
    // create a new session......
    await Session.create({userId: regeteredUser._id})
  
    // generate accessToken
    const accessToken = jwt.sign({id: regeteredUser._id}, process.env.SECRET_KET, {expiresIn: '10d'})
  
    // generate refreshToken
    const refreshToken = jwt.sign({id: regeteredUser._id}, process.env.SECRET_KET, {expiresIn: '15d'})
  
    regeteredUser.isLoggedIn = true;
    await regeteredUser.save();

    return res.status(200).json({success: true, message: `login successfully ${regeteredUser.userName}`, accessToken, refreshToken, regeteredUser})
  } catch (error) {
    return res.status(500).json({success: false, message: error.message});
  }
}

export const userLogout = async (req, res) => {
  try {
    const  userId  = req.userId;

    await Session.deleteMany({ userId });

    await User.findByIdAndUpdate(userId, {isLoggedIn: false}, { new: true })

    return res.status(200).json({success: true, message: 'user logout successfully'});

  } catch (error) {
    return res.status(500).json({success: false, message: error.message})
  }
}

export const forgotPassword = async (req, res) => {
try {
    const { email } = req.body;
  
    const user = await User.findOne({email})
    if(!user){
      return res.status(400).json({success: false, message: 'User not found'})
    }
  
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const expOTP = new Date(Date.now() + 10 * 60 * 1000);
  
    user.otp = otp;
    user.expOTP = expOTP; 
    await user.save();

    await sendOtpMail(email, otp);
    return res.status(200).json({success: true, message: 'OTP send successfully'})
} catch (error) {
  return res.status(500).json({success: false, message: error.message})
}
}

export const verifyOTP = async (req, res) => {
  const { otp } = req.body;
  const email = req.params.email;

  if(!otp){
    return res.status(400).json({success: false, message: 'OTP is required'})
  }

  try {
    const user = await User.findOne({ email })
    if(!user){
      return res.status(400).json({success: false, message: "user not found"})
    }

    if(!user || !user.expOTP){
      return res.status(400).json({success: false, message: 'OTP not generated or allready vieified'})
    }

    if(user.expOTP < new Date()){
      return res.status(400).json({success: false, message: 'OTP is expired. please generate a new one'})
    }

    if(otp !== user.otp){
     return res.status(400).json({success: false, message: 'Invalid OTP'})
    }

    user.otp = null;
    user.expOTP = null;

    await user.save();

    return res.status(200).json({success: true, message: 'OTP verify successfully'})
  } catch (error) {
    return res.status(500).json({success: false, message: error.message})
  }
}

export const changePassword = async (req, res) => {
  const { newPassword, confirmPassword } = req.body;
  const email = req.params.email;

  if(!newPassword || !confirmPassword){
    return res.status(400).json({success: false, message: 'all fields are required'});
  }

  if(newPassword !== confirmPassword){
    return res.status(400).json({success: false, message: 'both are not same'})
  }

  try {
    const user = await User.findOne({ email })
    if(!user){
      return res.status(400).json({success: false, message: 'user not found'})
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({success: true, message: 'password change successfully'})
  } catch (error) {
    return res.status(500).json({success: false, message: error.message})
  }
}

export const updateProfile = async (req, res) => {
  try {
    const userId = req.userId
    if(!userId){
      return res.status(400).json({success: false, message: 'Unauthorized user'})
    }
  
    const { userName, email } = req.body;

    if(!userName?.trim() || !email?.trim()){
      return res.status(400).json({success: false, message: 'All fields should be required'})
    }
  
    const updateProfile = await User.findByIdAndUpdate(
      userId,
      { userName, email },
      {new: true, runValidators: true}
    ).select('-password')
  
    if(!updateProfile){
      return res.status(404).json({success: false, message: 'User not found'})
    }
  
    return res.status(200).json({success: true, message:'profile updated successfully', data: updateProfile})
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'Email already exists'
      });
    }

    return res.status(500).json({success: false, message: error.message})
  }

}

export const userChangePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const  email  = req.params.email;
  console.log(email)

  if(!oldPassword || !newPassword){
    return res.status(400).json({success: false, message: 'All fields should be required'})
  }

  try {
    const user = await User.findOne({ email });
    if(!user){
      return res.status(400).json({success: false, message: 'user not found'})
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if(!isMatch){
      return res.status(400).json({success: false, message: 'old password is incorrect'})
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    return res.status(200).json({success: true, message: 'password changed successfully'})

  } catch (error) {
    return res.status(500).json({success: false, message: error.message})
  }
}