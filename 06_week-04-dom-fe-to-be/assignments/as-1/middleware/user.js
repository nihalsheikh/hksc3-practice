// User Middleware
const userMiddleware = (req, res, next) => {
	const username = req.headers.username;
	const password = req.headers.password;

	if (!username && !password) {
		res.status(403).json({ message: "Invalid Credentials" });
		return;
	}

	// connectToDb();
	// validate user credentials { username: 'username', password: 'passowrd' }
};

module.exports = userMiddleware;
