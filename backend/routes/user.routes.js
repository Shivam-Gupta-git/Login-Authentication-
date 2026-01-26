import express from 'express'
import { forgotPassword, userLogin, userLogout, userRegistration, verification } from '../controller/user.controller.js';
import { isAuthenticated } from '../middleware/auth.middleware.js';

const userRoutes = express.Router();

userRoutes.post('/userRegistration', userRegistration)
userRoutes.post('/verify', verification)
userRoutes.post('/userLogin', userLogin)
userRoutes.post('/userLogout', isAuthenticated, userLogout)
userRoutes.post('/forgot-Password', forgotPassword)

export default userRoutes