import { Router } from "express";
import { validToken } from "../middlewares/validToken.js";
import { postTransaction } from "../controllers/checkoutController.js";

const checkoutRouter = Router()

checkoutRouter.post('/checkout', validToken, postTransaction)

export default checkoutRouter;