import { Router } from "express";
import { getCart, postCart, deleteCart, addJersey, removeJersey } from "../controllers/cartController.js";
import { validToken } from "../middlewares/validToken.js";

const cartRouter = Router()

cartRouter.post("/cart", validToken,postCart)
cartRouter.get("/cart", validToken, getCart)
cartRouter.post('/deletecart', validToken, deleteCart)
cartRouter.post('/add', validToken, addJersey)
cartRouter.post('/remove', validToken, removeJersey)
export default cartRouter