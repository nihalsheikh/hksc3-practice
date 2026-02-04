// MongoDB Mongoose Table/Collection Schemas
const mongoose = require("mongoose");

// MONGODB Connection String
const DB_URL = process.env.MONGODB_URL;
mongoose.connect(DB_URL);

// Admin Schema
const AdminSchema = new mongoose.Schema({
	username: String,
	password: String,
});

// User Schema
const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	purchaseCourses: [
		{
			type: mongoose.Schema.Types.ObjectId,	
			ref: "Course",
		},
	],
});

// Course Schema
const CourseSchema = new mongoose.Schema({
	title: String,
	description: String,
	price: Number,
	imageLink: String,
});

// Model Names for defined schemas
const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

// Export the Models
module.exports = {
	Admin,
	User,
	Course,
};
