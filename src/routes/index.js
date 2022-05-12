import { Router } from "express";

import authRouter from "./authRouter.js";
import checkoutRouter from "./checkoutRouter.js";



const router = Router();
router.use(authRouter);
router.use(checkoutRouter)
export default router;