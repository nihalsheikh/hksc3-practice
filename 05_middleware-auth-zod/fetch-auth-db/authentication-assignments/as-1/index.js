const express = require("express");
const jwt = require("jsonwebtoken");
const z = require("zod");

const app = express();

const PORT = 3000;
const jwtPassword = "Z#123@abc";

const emailSchema = z.email();
const passwordSchema = z.string().min(6);

function signJwt(username, password) {
	// should return null if username is not valid email or if the password is < 6 chars
	const usernameResponse = emailSchema.safeParse(username);
	const passwordResponse = passwordSchema.safeParse(password);

	if (!usernameResponse.success || !passwordResponse.success) {
		return null;
	} else {
		// return a jwt token with username encoded.
		return jwt.sign({ email: username }, jwtPassword);
	}
}

// take jwt as input and return true if it can be decoded, else return false
function decodeJwt(token) {
	const decodedToken = jwt.decode(token);

	if (decodedToken) {
		return true;
	} else {
		return false;
	}
}

// take jwt as input, return true if jwt is verified, else return false
function verifyJwt(token) {
	const verifiedToken = true;

	try {
		jwt.verify(token, jwtPassword);
	} catch (error) {
		verifiedToken = false;
	}

	return verifiedToken;
}

app.get("/", (req, res) => {
	res.send("Assignment 1: Auth Middleware");
});

app.listen(PORT, () => {
	console.log(`server is on: http://localhost:${PORT}`);
});
