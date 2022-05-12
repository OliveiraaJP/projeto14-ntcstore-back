import db from "../db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function signUp(req, res) {
  const { password, name, email } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const user = await db.collection("users").findOne({ email });
    if (user) {
      res.status(400).send("Usuário já existe.");
      return;
    }
    await db.collection("users").insertOne({
      name: name.trim(),
      email: email.trim(),
      password: hashedPassword,
    });
    res.status(200).send("Usuário criado com sucesso!");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export const postSignIn = async (req, res) => {
  try {
    const token = uuid();
    const { user } = res.locals;
    await db.collection("sessions").insertOne({
      userId: user._id,
      token,
    });
    res.send({ ...user, token }).status(200);
  } catch {
    res.sendStatus(500);
  }
};
