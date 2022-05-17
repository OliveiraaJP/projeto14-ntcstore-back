import bcrypt from 'bcrypt'

import { signInSchema } from '../schemas/authSchemas.js'
import db from '../db.js'

export const signInMiddleware = async (req, res, next) => {
    const validation = signInSchema.validate(req.body, { abortEarly: false })
    if (validation.error) {
        return res.sendStatus(422)
    }
    try {
        const { email, password } = req.body
        const user = await db.collection('users').findOne({ email })
        if (!user) {
            return res.sendStatus(404)
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return res.sendStatus(401)
        }

        delete user.password;
        res.locals.user = user
        next()
    } catch {
        res.sendStatus(500)
    }
}