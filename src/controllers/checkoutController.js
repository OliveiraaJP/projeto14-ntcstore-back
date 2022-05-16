import db from "../db.js";

export const postTransaction = async (req, res) => {
  const {
    userInfo
  } = req.body;
  console.log(req.body);
  const { user } = res.locals;

  try {
    await db.collection("users").updateOne(
      { name: user.name },
      {
        $push: {
          transactions: {
            user: {
              name: `${userInfo.name} ${userInfo.lastName}`,
              tel: userInfo.tel,
              adress: `${userInfo.adress} ${userInfo.numberAdress} ${userInfo.adressComplement}`,
            },
            price: {
                totalPrice: userInfo.price,
                parcels: userInfo.parcel,
            },
            products: userInfo.products
          },
        },
      }
    );
    
    await db.collection('users').updateOne({name: user.name}, {$set:{
        cart: []
    }})
    res.sendStatus(200)
  } catch (error) {
    console.log("error post transaction", error);
  }
};
