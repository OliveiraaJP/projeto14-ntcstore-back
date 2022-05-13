import db from "../db.js";

export const postCart = async (req, res) => {
    const {name, price, img} = req.body;
    
    try {
        console.log(req.body);
        const camisa = await db.collection("jerseys").findOne({name});
        
    } catch (error) {
        console.log("post cart", error);
    }
}