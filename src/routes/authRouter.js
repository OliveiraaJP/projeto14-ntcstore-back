import { Router } from "express";
import { signUp, postSignIn, postAutoLogin, deleteSession, postAdmin } from "../controllers/authController.js";

import validSignUp from "../middlewares/signUpMiddleware.js";
import { signInMiddleware } from '../middlewares/signInMiddleware.js';
import { validToken } from "../middlewares/validToken.js";
import { logoutMiddleware } from "../middlewares/logoutMiddleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";

const authRouter = Router();

authRouter.post('/signup', validSignUp, signUp);
authRouter.post('/sign-in', signInMiddleware, postSignIn)
authRouter.post('/auto-login', validToken, postAutoLogin)
authRouter.delete('/session', logoutMiddleware, deleteSession)
authRouter.post('/admin', adminMiddleware, postAdmin)

export default authRouter;