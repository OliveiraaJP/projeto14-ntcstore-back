import db from "../db.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

export const validToken = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        const token = authorization?.replace('Bearer ', '').trim()
        if (!token) {
            return res.sendStatus(401);
        }
        const secretKey = process.env.JWT_SECRET;
        try {
            const data = jwt.verify(token, secretKey);
        } catch {
            return res.sendStatus(401);
        }
        const session = await db.collection('sessions').findOne({ token })
        if (!session) {
            return res.sendStatus(401);
        }
        const user = await db.collection('users').findOne({ _id: session.userId });
        if (!user) {
            return res.sendStatus(401);
        }

        delete user.password;
        res.locals.user = user;

        next()
    } catch {
        res.sendStatus(500);
    }
}