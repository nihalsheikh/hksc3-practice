const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv").config();



const app = express();
const PORT = 3000;

// Middleware to parse the req body
app.use(bodyParser.json());

// Home Page
app.get("/", (req, res) => {
	res.send("Home Page");
});

// create a New Admin Account
app.post("/admin/signup", (req, res) => {
	// create a new admin user
});

app.listen(PORT, () => {
	console.log(`Server is running on - http://localhost:${PORT}`);
});
