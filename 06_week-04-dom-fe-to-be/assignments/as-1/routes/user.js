const { Router } = require("express");
const router = Router();

const { User, Course } = require("../db");

const userMiddleware = require("../middleware/user.js");

// #############====== User Routes ======#############
// New User Signup
router.post("/signup", async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	await User.create({ username, password });

	res.status(200).json({ message: "User created successfully" });
});

// List of all the courses
// this endpoint is open to all, that's why no middleware is used here
router.get("/courses", async (req, res) => {
	const allCourses = await Course.find({});
	res.json({ courses: allCourses });
});

// User purchases a course
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
	// get course id from the url
	const courseId = req.params.courseId;

	// get username from the headers
	const username = req.headers.username;

	// Update the User with the details of the course
	try {
		await User.updateOne(
			{ username: username },
			{ $push: { purchasedCourses: courseId } },
		);
	} catch (err) {
		console.log(err);
	}

	res.status(200).json({ message: "Course purchased successfully" });
});

// All the User's purchased courses
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
	const username = req.headers.username;

	const user = await User.findOne({ username: username });

	const courses = await Course.find({
		_id: { $in: user.purchasedCourses },
	});

	res.json({ purchasedCourses: courses });
});

module.exports = router;
