import { Router } from "express";
import { postCheckout } from "../controllers/checkoutController";

const checkoutRouter = Router()

checkoutRouter.post("/checkout", postCheckout)
export default checkoutRouter