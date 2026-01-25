import { User } from "../model/user.model.js";
import bcrypt from 'bcrypt'
import { verifyEmail } from "../verifyEmail/verifyEmail.js";
import jwt from 'jsonwebtoken'

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

