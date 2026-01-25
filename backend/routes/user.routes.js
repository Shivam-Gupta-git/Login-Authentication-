import express from 'express'
import { userRegistration } from '../controller/user.controller.js';

const userRoutes = express.Router();

userRoutes.post('/userRegistration', userRegistration)

export default userRoutes