const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const jwtPassword = "Z#abc@123";

const PORT = 3000;

const userData = [
	{
		username: "johnwick@proton.me",
		password: "lily&dog",
		name: "John Wick",
	},
	{
		username: "sherlock@tutamail.com",
		password: "221@bakerstreet",
		name: "Sherlock Holmes",
	},
	{
		username: "jamesbond@gmail.com",
		password: "123456",
		name: "James Bond",
	},
];

// middleware to check for sign-in user
function isSignedIn(req, res, next) {}

// check if user exists
function userExists(user, pswd) {
	// return true or false based on if the user exist in userData arr
	let userInDb = false;

	for (let i = 0; i < userData.length; i++) {
		if (userData[i].username === user && userData[i].password === pswd) {
			userInDb = true;
		}
	}

	return userInDb;
}

// function to get user data
async function getData(req, res, next) {
	const data = await fetch("https://fakerapi.it/api/v1/persons");
}

// parse the body
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Making Endpoints for GET and POST requests.");
});

app.get("/users", (req, res) => {
	const token = req.headers.authorization;

	// check for valid user
	try {
		const decodedToken = jwt.verify(token, jwtPassword);
		const username = decodedToken.username;

		res.status(200).json({
			users: userData.filter((value) => {
				if (value.username === username) {
					return false;
				} else {
					return true;
				}
			}),
		});
	} catch (error) {
		// return status code 403 if not
		res.status(403).json({
			msg: "Invalid Token",
		});
	}
});

app.post("/sign-in", (req, res) => {
	// send a body => {username :string, password: string}
	const username = req.body.username;
	const password = req.body.password;

	if (!userExists(username, password)) {
		return res.status(403).json({
			msg: "User doesn't exist in memory db",
		});
	}

	// give back a json web token (jwt) with username encrypted
	let token = jwt.sign({ username: username }, jwtPassword);

	return res.status(200).json({
		token,
	});
});

app.listen(PORT, () => {
	console.log(`server is listening on: http:localhost:${PORT}`);
});
