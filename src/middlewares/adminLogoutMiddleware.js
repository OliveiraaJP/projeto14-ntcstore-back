import db from "../db.js";

export const adminLogoutMiddleware = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization?.replace("Bearer ", "").trim();
        if (!token) {
            return res.sendStatus(401);
        }
        const session = await db.collection('adminSession').findOne({ token });
        if (!session) {
            return res.sendStatus(401);
        }

        res.locals.session= session;

        next()
    }
    catch {
        res.sendStatus(500);
    }
}