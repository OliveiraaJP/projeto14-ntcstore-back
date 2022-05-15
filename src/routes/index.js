import { Router } from "express";

import authRouter from "./authRouter.js";
import cartRouter from "./cartRouter.js";
import checkoutRouter from "./checkoutRouter.js";

import jerseyRouter from "./jerseyRouter.js";


const router = Router();
router.use(authRouter);
router.use(cartRouter)
router.use(jerseyRouter);
router.use(checkoutRouter)
export default router;