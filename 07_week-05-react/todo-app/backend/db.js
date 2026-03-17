const mongoose = require("mongoose");
const connectionUrl = process.env.MONGODB_URL;

// connect to db
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
const userDbSchema = new mongoose.Schema({
	username: String,
	email: String,
	password: String,
	// date: Date.now(),
});

const User = mongoose.model("User", userDbSchema);

// Todo Schema
const todoDbSchema = new mongoose.Schema({
	title: String,
	description: String,
	completed: Boolean,
	// date: Date.now(),
});

const Todo = mongoose.model("Todos", todoDbSchema);

// exports
module.exports = {
	connectToDb,
	User,
	Todo,
};
