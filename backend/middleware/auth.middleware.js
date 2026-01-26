import jwt from 'jsonwebtoken'
import { User } from '../model/user.model.js';

export const isAuthenticated = async (req, res, next) => {
try {
   const authHeaders = req.headers.authorization;

    if(!authHeaders || !authHeaders.startsWith('Bearer ')){
      return res.status(400).json({success: false, message: 'Authorization token is missing or Invalid'})
    }
  
    const token = authHeaders.split(" ")[1];
    let decoded;

    try {
      decoded = jwt.verify(token, process.env.SECRET_KET)
    } catch (error) {
      if(error.name === 'TokenExpiredError'){
        return res.status(400).json({success: false, message: 'your toke has expires'})
      }
    }

    const { id } = decoded;
    const registeredUser = await User.findById(id);
    if(!registeredUser){
      return res.status(404).json({success: false, message: 'user is not found'})
    }
    req.userId = registeredUser._id;
    next();

} catch (error) {
  return res.status(500).json({success: false, message: error.message})
}
}