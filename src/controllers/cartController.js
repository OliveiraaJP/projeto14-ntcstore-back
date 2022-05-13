import db from "../db.js";

export const postCart = async (req, res) => {
    const {name, price, img} = req.body;
    const { user } = res.locals

    try {
        console.log(req.body);
        const camisa = await db.collection("jerseys").findOne({name});
        await db.collection("users").update({name: user.name},{$push: {
            cart: {name, price, img}
        }})
        
    } catch (error) {
        console.log("post cart", error);
    }
}