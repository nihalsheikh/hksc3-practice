const express = require("express");
const app = express();

const PORT = 3000;

// create a global middleware (app.use)
// limit the rate of request from a user to only 5 request per second
// if more than that, block them with a status code 404
// User will be sending their user id in Header as 'user-id'
// we are given numberOfRequestsForUser object, it clears every second

let numberOfRequestsForUser = {};

setInterval(() => {
	numberOfRequestsForUser = {};
}, 1000);

// global middleware
app.use(function (req, res, next) {
	// count the requests by a user
	const userId = req.headers["user-id"];

	if (numberOfRequestsForUser[userId]) {
		numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] + 1;
		// limit the rate to 5/sec
		if (numberOfRequestsForUser[userId] > 5) {
			res.status(404).json({
				msg: "Too many requests",
			});
		} else {
			next();
		}
	} else {
		numberOfRequestsForUser[userId] = 1;
		next();
	}
});

app.get("/", (req, res) => {
	res.send("Assignment 2: API Request Rate Limiter");
});

app.listen(PORT, () => {
	console.log(`server: http://localhost:${PORT}`);
});
