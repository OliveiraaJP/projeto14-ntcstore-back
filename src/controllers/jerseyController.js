import db from "../db.js";

export const getJerseys = async (req, res) => {
    try {
        //const { user } = res.locals
        const jerseys = await db.collection('jerseys').find({}).toArray()
        res.status(200).send(jerseys)
    } catch {
        res.sendStatus(500);
    }
}

export const postJersey = async (req, res) => {
    try {
        await db.collection('jerseys').insertOne(req.body)
        res.sendStatus(201)
    } catch {
        res.sendStatus(500)
    }
}