import { Router } from "express";
import { signUp, postSignIn } from "../controllers/authController.js";

import validSignUp from "../middlewares/signUpMiddleware.js";
import { signInMiddleware } from '../middlewares/signInMiddleware.js';

const authRouter = Router();

authRouter.post('/signup', validSignUp, signUp);
authRouter.post('/sign-in', signInMiddleware, postSignIn)

export default authRouter;
