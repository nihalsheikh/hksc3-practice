const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv").config();

const app = express();
const PORT = 3000;

// route files
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

// Middleware to parse the req body
app.use(bodyParser.json());

// Home Page
app.get("/", (req, res) => {
	res.send("Home Page");
});

// Admin Routes
app.use("/admin", adminRouter);

// User Routes
app.use("/user", userRouter);

app.listen(PORT, () => {
	console.log(`Server is running on - http://localhost:${PORT}`);
});
