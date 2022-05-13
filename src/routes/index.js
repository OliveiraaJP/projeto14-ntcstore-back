import { Router } from "express";

import authRouter from "./authRouter.js";
import jerseyRouter from "./jerseyRouter.js";


const router = Router();
router.use(authRouter);
router.use(jerseyRouter);
export default router;