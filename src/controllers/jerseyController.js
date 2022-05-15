import db from "../db.js";

export const getJerseys = async (req, res) => {
    try {
        const jerseys = await db.collection('jerseys').find({}).toArray()
        res.status(200).send(jerseys)
    } catch {
        res.sendStatus(500);
    }
}

export const postJersey = async (req, res) => {
    try {
        const jerseys = await db.collection('jerseys').find({}).toArray()
        await db.collection('jerseys').insertOne({
            ...req.body,
            id: jerseys.length ? Number(jerseys[jerseys.length - 1].id) + 1 : 0
        })
        res.sendStatus(201)
    } catch {
        res.sendStatus(500)
    }
}