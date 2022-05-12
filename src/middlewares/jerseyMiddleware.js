import { jerseySchema } from "../schemas/jerseySchema.js"

export const jerseyMiddleware = async (req, res, next) => {
    const validation = jerseySchema.validate(req.body, { abortEarly: false })
    if (validation.error) {
        return res.sendStatus(422)
    }
    next()
}