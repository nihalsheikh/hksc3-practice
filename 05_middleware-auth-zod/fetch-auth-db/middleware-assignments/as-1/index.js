const express = require("express");
const app = express();

const PORT = 3000;

// Global Variable
let requestCount = 0;

app.use(function (req, res, next) {
	// logic to count request
	requestCount = requestCount + 1; // increased when middleware is called, then forwarded to next middleware
	// console.log(requestCount);
	next();
});

app.get("/", (req, res) => {
	res.send("Assignment 1: Standard Middlewares");
});

app.get("/users", (req, res) => {
	res.json({ name: "John Doe" });
});

app.get("/request-count", (req, res) => {
	res.status(200).json({
		count: requestCount,
	});
});

app.listen(PORT, () => {
	console.log(`server is listening on http://localhost:${PORT}`);
});
