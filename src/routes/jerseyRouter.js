import { Router } from "express";
import { getJerseys, postJersey } from "../controllers/jerseyController.js";
import { jerseyMiddleware } from "../middlewares/jerseyMiddleware.js";
import { validAdminToken } from "../middlewares/validAdminTokenMiddleware.js";
import { validToken } from "../middlewares/validToken.js";

const jerseyRouter = Router()

jerseyRouter.get('/jerseys', validToken, getJerseys)
jerseyRouter.post('/jerseys', validAdminToken, jerseyMiddleware, postJersey)

export default jerseyRouter