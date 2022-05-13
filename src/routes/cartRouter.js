import { Router } from "express";
import { postCart } from "../controllers/cartController.js";

const cartRouter = Router()

cartRouter.post("/cart", postCart)
export default cartRouter