import { Router } from 'express';

import { postSignIn } from '../controllers/authController.js';
import { signInMiddleware } from '../middlewares/signInMiddleware.js';

const authRouter = Router()

authRouter.post('/sign-in', signInMiddleware, postSignIn)
export default authRouter