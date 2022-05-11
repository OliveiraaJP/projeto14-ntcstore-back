//import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid';

import db from '../db.js';

export const postSignIn = async (req, res) => {
    try {
        const token = uuid();
        const { user } = res.locals
        await db.collection('sessions').insertOne({
            userId: user._id,
            token
        })
        res.send({ ...user, token }).status(200)
    } catch {
        res.sendStatus(500)
    }
}