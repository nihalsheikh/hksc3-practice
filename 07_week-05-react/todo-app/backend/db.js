const mongoose = require("mongoose");
const { boolean } = require("zod");
const connectionUrl = process.env.MONGODB_URL;

async function connectToDb() {
	try {
		await mongoose.connect(connectionUrl);
		console.log("DB Connection Successfull");
	} catch (error) {
		console.log("DB connection error", error);
		res.status(404).json({ message: "Something is up with DB" });
		return;
	}
}

// User Schema
const userSchema = new mongoose.Schema({
	username: String,
	email: String,
	password: String,
});

const User = mongoose.model("User", userSchema);

// Todo Schema
const todoDbSchema = new mongoose.Schema({
	title: String,
	description: String,
	completed: Boolean,
});

const Todo = mongoose.model("Todos", todoDbSchema);

// exports
module.exports = {
	connectToDb,
	User,
	Todo,
};
