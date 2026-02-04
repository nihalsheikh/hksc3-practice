// Middleware to authenticate Admin User
const adminMiddleware = (req, res, next) => {
	// authenticate the admin
	const username = req.headers.username;
	const password = req.headers.password;

	if (!username && !password) {
		res.status(403).json({ message: "Invalid credentials" });
	}

	try {
		// connectToDb
	} catch (err) {
		// throw error if 
	}
	// check for username and password in headers
};

// export this middleware
module.exports = adminMiddleware;
