const { Router } = require("express");
const router = Router();

const userMiddleware = require("../middleware/user.js");

// #############====== User Routes ======#############
// New User Signup
router.post("/signup", (req, res) => {});

// List of all the courses
router.get("/courses", (req, res) => {});

// User purchases a course
router.post("/courses/:courseId", (req, res) => {});

// All the User's purchased courses
router.get("/purchased-courses", (req, res) => {
	res.send("All the Purchased Courses will appear here.");
});

module.exports = router;
