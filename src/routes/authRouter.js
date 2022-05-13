import { Router } from "express";
import { signUp, postSignIn, postAutoLogin, deleteSession } from "../controllers/authController.js";

import validSignUp from "../middlewares/signUpMiddleware.js";
import { signInMiddleware } from '../middlewares/signInMiddleware.js';
import { validToken } from "../middlewares/validToken.js";
import { logoutMiddleware } from "../middlewares/logoutMiddleware.js";

const authRouter = Router();

authRouter.post('/signup', validSignUp, signUp);
authRouter.post('/sign-in', signInMiddleware, postSignIn)
authRouter.post('/auto-login', validToken, postAutoLogin)
authRouter.delete('/session', logoutMiddleware, deleteSession)

export default authRouter;