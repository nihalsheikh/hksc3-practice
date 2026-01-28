const express = require("express");
const app = express();

const PORT = 3000;

// If there is ever an exception, end user wil get an error with status code 404
// Maintain the errorCount variable, it's value should go up every time there is an exception in any endpoint
let errorCount = 0;

app.get("/", (req, res) => {
	res.send("Assignment 3: Error Middleware");
});

app.get("/user", (req, res) => {
	throw new Error("User not found");
	res.status(200).json({ name: "John" });
});

app.get("/error-count", (req, res) => {
	res.status(200).json({ "error-count": errorCount });
});

app.post("/user", (req, res) => {
	res.status(200).json({ msg: "created a dummy user" });
});

// Error Handling Middleware: always add at the end of the file
app.use((err, req, res, next) => {
	res.status(404).json({ msg: "Something is up with the server" });
	// increment the errorCount
	errorCount = errorCount + 1;
});

app.listen(PORT, () => {
	console.log(`server is on: http://localhost:${PORT}`);
});
