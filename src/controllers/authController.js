import database from "../db.js";
import bcrypt from "bcrypt";

export async function signUp(req, res) {
	const { password, name, email } = req.body;

	const hashedPassword = bcrypt.hashSync(password, 10);

	try {
		const user = await database.collection("users").findOne({ email });
		if (user) {
			res.status(400).send("Usuário já existe.");
			return;
		}
		await database.collection("users").insertOne({
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