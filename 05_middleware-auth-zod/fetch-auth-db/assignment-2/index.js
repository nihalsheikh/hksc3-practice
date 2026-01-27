const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "Z#123@abc";

const mongoUrl =
	"mongodb+srv://nihalsheikh585_db_user:9RWqp78XvvuGOO8y@cluster0.wig9mid.mongodb.net/";

// connect to mongodb
mongoose.connect(mongoUrl);

// Define the User DB schema
const User = mongoose.model("Users", {
	name: String,
	email: String,
	password: String,
});

const PORT = 3000;
const app = express();

// check if user exists in db
async function userExists(username, password) {
	//logic
	let userInDb = false;

	const ifUserInDb = await User.findOne({
		name: username,
		password: password,
	});
	if (ifUserInDb) {
		userInDb = true;
	}

	return userInDb;
}

// parse the body
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Assignment 2: Home Page");
});

// get data {username, password} from body
app.post("/sign-up", async (req, res) => {
	const username = req.body.name;
	const email = req.body.email;
	const password = req.body.name;

	// check for existing email
	const existingUser = await User.findOne({ email: email });
	if (existingUser) {
		return res.status(400).send("Email already exists");
	}

	// save user in DB
	try {
		const newUser = new User({
			name: username,
			email: email,
			password: password,
		});

		newUser.save().then(() => console.log("User saved to db"));
	} catch (error) {
		res.status(403).json({ msg: "Unable to connect to db" });
	}

	res.status(200).json({ msg: "Sign-up success, user saved to db" });
});

// check if correct user is signing-in
app.get("/sign-in", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	// check for valid username and password
	if (!userExists(username, password)) {
		return res.status(403).json({
			msg: "User does not exist in DB",
		});
	}

	let token = jwt.sign({ username: username }, jwtPassword);
	res.status(200).json({
		token,
	});
});

app.get("/users", async (req, res) => {
	const username = req.headers.username;

	if (!username) {
		return res.status(404).json({ msg: "User not found" });
	}

	// array of object [{username}]
	const allUsers = await User.find({}, "name -_id");

	res.json({
		allUsers,
	});
});

app.listen(PORT, () => {
	console.log(`server is listening on: http://localhost:${PORT}`);
});
