const mongoose = require("mongoose");

require("dotenv").config();

const connectionUrl = process.env.MONGODB_URL;

const connectToDb = async () => {
	try {
		await mongoose.connect(connectionUrl);

		console.log("Connected to database");
	} catch (error) {
		console.error("Database connection failed");
		res.status(404).json({ message: "Database connection failed" });
		return;
	}
};

const todoSchema = new mongoose.Schema({
	title: String,
	description: String,
});

const Todo = mongoose.model("Todo", todoSchema);
