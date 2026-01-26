import { User } from "../model/user.model.js";
import bcrypt from 'bcrypt'
import { verifyEmail } from "../verifyEmail/verifyEmail.js";
import jwt from 'jsonwebtoken'
import { Session } from "../model/session.model.js";

export const userRegistration = async (req, res) => {
  try {
    const {userName, email, password} = req.body;
    if(
      [userName, email, password].some((fields) => !fields || fields.trim() === '')){
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
    const { userId } = req.userId;
  } catch (error) {
    return res.status(500)
  }
}