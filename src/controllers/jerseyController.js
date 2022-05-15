import { ObjectId } from "mongodb";
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
        await db.collection('jerseys').insertOne(req.body)
        res.sendStatus(201)
    } catch {
        res.sendStatus(500)
    }
}

export const getJersey = async (req, res) => {
    try {
        const { id } = req.params
        const jersey = await db.collection('jerseys').findOne({ _id: new ObjectId(id) })
        res.status(200).send(jersey)
    } catch {
        res.sendStatus(500);
    }
}