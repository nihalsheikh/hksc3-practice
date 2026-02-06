// Check User authentication
const { User } = require("../db/index");

const userMiddleware = (req, res, next) => {
	// get the user credentials from headers
	const username = req.headers.username;
	const password = req.headers.password;

	// Check if user exist in db
	User.findOne({
		username: username,
		password: password,
	}).then(function (value) {
		if (value) {
			next();
		} else {
			res.status(403).json({ message: "User doesn't exist." });
		}
	});
};

module.exports = userMiddleware;
