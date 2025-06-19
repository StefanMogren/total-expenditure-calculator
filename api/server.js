import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Routers import
import expenditureRouter from "./routes/expenditure.js";

// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT;
mongoose.connect(process.env.CONNECTION_STRING);
const database = mongoose.connection;
const now = () => new Date().toLocaleString();

// Middlewares
app.use(express.json());

// Routes
app.use("api/expenditure", expenditureRouter);

database.on("error", (error) => console.log(error));
database.once("connected", () => {
	console.log("DB Connected");
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT} since ${now()}`);
	});
});
