// Check Admin authentication
const { Admin } = require("../db/index");

const adminMiddleware = (req, res, next) => {
	// get the admin credentials from headers
	const username = req.headers.username;
	const password = req.headers.password;

	// check if 'username' and 'password' exist in db
	Admin.findOne({
		username: username,
		password: password,
	}).then(function (value) {
		if (value) {
			next(); // go to next, if credentails are okay
		} else {
			// return error status and user not exist msg
			res.status(403).json({ message: "Admin doesn't exist." });
		}
	});
};

// export this middleware
module.exports = adminMiddleware;
