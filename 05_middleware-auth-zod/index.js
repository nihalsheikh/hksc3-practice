const express = require("express");
const app = express();

const PORT = 3000;

function useMiddleware(req, res, next) {
	console.log("Entered: useMiddleware func");
	const username = req.headers.username;
	const password = req.headers.password;

	if (username && password) {
		console.log("username and password exists");
	} else {
		console.log("username and password not found");
	}

	if (username != "nihal" && password != "pass") {
		console.log("headers exist, but not matched to this current user");
		res.status(403).json({
			msg: "Incorrect Credentials",
		});
	} else {
		console.group("everything was success, routing to next middleware");
		next();
	}
}

function kidneyMiddleware(req, res, next) {
	console.log("Entered: kidney middleware");
	const kidneyId = req.query.kidneyId;

	if (kidneyId) {
		console.log("kidneyId exists");
	} else {
		console.log("kidneyId Not Found");
	}

	if (kidneyId != 1 && kidneyId != 2) {
		console.log("kidneyId exists, but not the correct one");
		console.log(kidneyId);
		res.status(403).json({
			msg: "Invalid KidneyId",
		});
	} else {
		console.group("everything was success, routing to next middleware");
		next();
	}
}

// Hospital Home route (waiting area)
app.get("/", (req, res) => {
	res.send("Hospital waiting area");
});

// Check your username password and id
app.get("/health-checkup", useMiddleware, (req, res) => {
	const username = req.headers.username;

	res.send(`${username ? username : "User"} is in good health`);
});

app.get("/kidney-checkup", useMiddleware, kidneyMiddleware, (req, res) => {
	const username = req.headers.username;

	res.send(`${username ? username : "User"} has good kidneys`);
});

app.listen(PORT, function () {
	console.log(`Hospital server is listening on: http://localhost:${PORT}`);
});
