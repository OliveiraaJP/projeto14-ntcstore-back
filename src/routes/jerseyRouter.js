import { Router } from "express";
import { getJerseys, postJersey } from "../controllers/jerseyController.js";
import { jerseyMiddleware } from "../middlewares/jerseyMiddleware.js";
import { validToken } from "../middlewares/validToken.js";

const jerseyRouter = Router()

//jerseyRouter.use(validToken)

jerseyRouter.get('/jerseys', validToken, getJerseys)
jerseyRouter.post('/jerseys', jerseyMiddleware, postJersey)

export default jerseyRouter