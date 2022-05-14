import { Router } from "express";
import { getCart, postCart } from "../controllers/cartController.js";
import { validToken } from "../middlewares/validToken.js";

const cartRouter = Router()

cartRouter.post("/cart", validToken,postCart)
cartRouter.get("/cart", validToken, getCart)
export default cartRouter