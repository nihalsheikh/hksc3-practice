const { Router } = require("express");
const router = Router();

const { Admin, Course } = require("../db");

const adminMiddleware = require("../middleware/admin.js");

// #############===== Admin Routes =====#############
// New Admin Account
router.post("/signup", async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	// check if username and password exist in DB
	// then wait for it to resolve
	await Admin.create({
		username, // username: username
		password, // password: password
	});

	// call function to create a new Admin user in Db
	res.status(200).json({ message: "Admin created successfully" });
});

// Admin creates a new course
router.post("/courses", adminMiddleware, async (req, res) => {
	// verify the username and password to be the same as the admin currently in use
	const title = req.body.title;
	const description = req.body.description;
	const price = req.body.price;
	const imageLink = req.body.imageLink;

	// put the above course data in Db
	const newCourse = await Course.create({
		title,
		description,
		price,
		imageLink,
	});

	res.status(200).json({
		message: "Course created successfully",
		courseId: newCourse._id,
	});
});

// Return all the courses
router.get("/courses", adminMiddleware, async (req, res) => {
	// get all the courses and display it
	const allCourses = await Course.find({});
	res.status(200).json({ courses: allCourses });
});

module.exports = router;
