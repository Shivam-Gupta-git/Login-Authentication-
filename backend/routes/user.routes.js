import express from 'express'
import { userLogin, userRegistration, verification } from '../controller/user.controller.js';

const userRoutes = express.Router();

userRoutes.post('/userRegistration', userRegistration)
userRoutes.post('/verify', verification)
userRoutes.post('/userLogin', userLogin)

export default userRoutes