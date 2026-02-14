const jwt = require("jsonwebtoken");

const { User } = require("../db");
const { JWT_SECRET_KEY } = require("../config");

const userJwtAuth = (req, res, next) => {
	const token = req.headers.authorization;
	const words = token.split(" ");

	const jwtToken = words[1];

	const decodedValue = jwt.verify(jwtToken, JWT_SECRET_KEY);

	// check for username && type: 'admin' | 'user'
	if (decodedValue.username) {
		next();
	} else {
		res.status(403).json({ message: "You are not authenticated" });
	}
};

module.exports = userJwtAuth;
