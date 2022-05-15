import db from "../db.js";
import { v4 as uuid } from "uuid";

export const postCart = async (req, res) => {
    const {name, price, img, size} = req.body;
    const { user } = res.locals

    try {
        const jerseyID = uuid()
        console.log(req.body);
        const camisa = await db.collection("jerseys").findOne({name});
        await db.collection("users").update({name: user.name},{$push: {
            cart: {name, price, img, size, id: jerseyID}
        }})
        
    } catch (error) {
        console.log("post cart", error);
    }
}

export const getCart = async (req, res) => {
    try {
        const { user } = res.locals
        const userSend = await db.collection("users").findOne({name: user.name})
        res.send(userSend).status(200)
    } catch (error) {
        console.log("error get cart" + error);
    }
}

export const deleteCart = async (req, res) => {
    const {id: jerseyId} = req.body
    const {user} = res.locals

    try {
        const jersey = await db.collection('users').findOne()
        await db.collection('users').updateOne({name: user.name}, {$pull: {"cart": {id: jerseyId}}})
        res.sendStatus(200)
        console.log('deletou');
    } catch (error) {
        console.log('delete cart ', error);
    }
}