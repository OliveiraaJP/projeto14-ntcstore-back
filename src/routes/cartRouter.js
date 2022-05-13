import { Router } from "express";
import { postCart } from "../controllers/cartController.js";
import { validToken } from "../middlewares/validToken.js";

const cartRouter = Router()

cartRouter.post("/cart", validToken,postCart)
export default cartRouter