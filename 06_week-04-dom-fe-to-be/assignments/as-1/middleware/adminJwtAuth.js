const jwt = require("jsonwebtoken");
const { Admin } = require("../db");

const secret = require("../index");

const adminJwtAuth = async (req, res, next) => {
	// Get the token from Header
	const token = req.headers.authorization;

	// covert to array = ['Bearer', 'askfldatuighalkjhflkjahfgshghwqtulkahfaafafag']
	const words = token.split(" ");

	// get the token
	const jwtToken = words[1];

	// verify the token
	const decodedVaue = jwt.verify(jwtToken, secret);

	if (decodedVaue.username) {
		next();
	} else {
		res.status(403).json({ message: "You are not authenticated" });
	}
};

module.exports = adminJwtAuth;
