import { User } from "../model/user.model";

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

      const newUser = await User.create({
        userName,
        email,
        password
      })

      await newUser.save();
      res.status(200).json({success: true, message: 'user registration successful', data: newUser})
  } catch (error) {
    return res.status(500).json({success: false, message: error.message});
  }
}