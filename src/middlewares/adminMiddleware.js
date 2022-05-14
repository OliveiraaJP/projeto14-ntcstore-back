import bcrypt from 'bcrypt'

import { signInSchema } from '../schemas/authSchemas.js'
import db from '../db.js'

export const adminMiddleware = async (req, res, next) => {
    const validation = signInSchema.validate(req.body, { abortEarly: false })
    if (validation.error) {
        return res.sendStatus(422)
    }
    try {
        const { email, password } = req.body
        const admin = await db.collection('users').findOne({ email: 'admin@admin.com' })
        if (!admin) {
            return res.sendStatus(404)
        }
        if (!bcrypt.compareSync(password, admin.password)) {
            return res.sendStatus(401)
        }
        delete admin.email;
        delete admin.password;
        res.locals.admin = admin
        next()
    } catch {
        res.sendStatus(500)
    }
}