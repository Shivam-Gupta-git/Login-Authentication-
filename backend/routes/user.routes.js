import express from 'express'
import { changePassword, forgotPassword, userLogin, userLogout, userRegistration, verification, verifyOTP } from '../controller/user.controller.js';
import { isAuthenticated } from '../middleware/auth.middleware.js';

const userRoutes = express.Router();

userRoutes.post('/userRegistration', userRegistration)
userRoutes.post('/verify', verification)
userRoutes.post('/userLogin', userLogin)
userRoutes.post('/userLogout', isAuthenticated, userLogout)
userRoutes.post('/forgot-Password', forgotPassword)
userRoutes.post('/verify-otp/:email', verifyOTP)
userRoutes.post('/change-password/:email', changePassword)

export default userRoutes