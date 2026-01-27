const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const jwtPassword = "Z#abc@123";

const PORT = 3000;

const fakeUserData = [
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

// check if user exists
function userExists(user, pswd) {
	// return true or false based on if the user exist in userData arr
	let userInDb = false;

	for (let i = 0; i < fakeUserData.length; i++) {
		if (
			fakeUserData[i].username === user &&
			fakeUserData[i].password === pswd
		) {
			userInDb = true;
		}
	}

	return userInDb;
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
			users: fakeUserData.filter((value) => {
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
