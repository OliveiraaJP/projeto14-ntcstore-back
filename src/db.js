import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

let db;
const mongoClient = new MongoClient(process.env.MONGO_URI);
//console.log(process.env.MONGO_DB);

try {
	await mongoClient.connect();
	db = mongoClient.db(process.env.MONGO_DB);
	console.log(chalk.blue.bold("Conexão com o banco de dados estabelecida"));
} catch (error) {
	console.log(chalk.red.bold("Não foi possível conectar ao banco de dados."));
}

export default db;
