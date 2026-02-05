const { Router } = require("express");
const router = Router();

const adminMiddleware = require("../middleware/admin.js");

// #############===== Admin Routes =====#############
// New Admin Account
router.post("/signup", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	if (!username && !password) {
		res.status(411).json({ message: "Error in username or password" });
		return;
	}

	// connectToDb
	// call function to create a new Admin user in Db
	res.status(200).json({ message: "Admin created successfully" });
});

// Admin creates a new course
router.post("/courses", adminMiddleware, (req, res) => {
	const username = req.headers.username;
	const password = req.headers.password;

	// verify admin credentials
	if (!username && !password) {
		res.status(403).json({ message: "Invalid admin credentials" });
		return;
	}

	// connectToDb();
	// verify the username and password to be the same as the admin currently in use

	const title = req.body.title;
	const description = req.body.description;
	const price = req.body.price;
	const imageLink = req.body.imageLink;

	// put the above course data in Db

	res.status(200).json({
		message: "Course created successfully",
		courseId: "new course id",
	});
});

// Return all the courses
router.get("/courses", adminMiddleware, (req, res) => {
	const username = req.headers.username;
	const password = req.headers.password;

	// verify the admin credentials
	if (!username && !password) {
		res.status(403).json({ message: "Invalid credentials" });
		return;
	}

	// connectToDb();
	// get all the courses and display it
	res.status(200).json({
		courses: [
			{
				id: 1,
				title: "Course Title",
				description: "Course Description",
				price: 100,
				imageLink: "link-to-image",
				published: true,
			},
		],
	});
});

module.exports = router;
