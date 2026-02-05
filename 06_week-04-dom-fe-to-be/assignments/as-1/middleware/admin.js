// Middleware to authenticate Admin User
const adminMiddleware = (req, res, next) => {
	// authenticate the admin with the credentials
	const username = req.headers.username;
	const password = req.headers.password;

	// verify credentials
	if (!username && !password) {
		res.status(403).json({ message: "Invalid credentials" });
	}

	// check if admin data exists in the DB
	try {
		// connectToDb
	} catch (err) {
		// throw error if
	}
};

// export this middleware
module.exports = adminMiddleware;
