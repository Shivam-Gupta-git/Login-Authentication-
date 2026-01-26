import express from 'express'
import { changePassword, forgotPassword, updateProfile, userLogin, userLogout, userRegistration, verification, verifyOTP } from '../controller/user.controller.js';
import { isAuthenticated } from '../middleware/auth.middleware.js';
import { userSchema, validateUser } from '../validator/user.validator.js';

const userRoutes = express.Router();

userRoutes.post('/userRegistration',validateUser(userSchema), userRegistration)
userRoutes.post('/verify', verification)
userRoutes.post('/userLogin', userLogin)
userRoutes.post('/userLogout', isAuthenticated, userLogout)
userRoutes.post('/forgot-Password', forgotPassword)
userRoutes.post('/verify-otp/:email', verifyOTP)
userRoutes.post('/change-password/:email', changePassword)
userRoutes.post('/update-profile', isAuthenticated, updateProfile)

export default userRoutes