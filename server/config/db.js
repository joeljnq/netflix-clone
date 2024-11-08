import mysql from "mysql2/promise.js";
import dotenv from "dotenv";

dotenv.config();

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log("Connection to DB successful");

    return connection;
  } catch (error) {
    console.log("Error connecting to DB: ", error);
  }
}

const connection = await connectToDatabase();


export default connection;
