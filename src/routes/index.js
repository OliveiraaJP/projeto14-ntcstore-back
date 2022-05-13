import { Router } from "express";

import authRouter from "./authRouter.js";
import checkoutRouter from "./checkoutRouter.js";

import jerseyRouter from "./jerseyRouter.js";


const router = Router();
router.use(authRouter);
router.use(checkoutRouter)
router.use(jerseyRouter);
export default router;