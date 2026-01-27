const express = require("express");
const app = express();

const PORT = 3000;

// make a Middleware, which allows only people above age of 14
function ageMiddleware(req, res, next) {
	const age = req.query.age;

	if (age >= 14) {
		next();
	} else {
		res.status(411).json({ msg: "Sorry, you are not of age yet" });
	}
}

// Home route
app.get("/", (req, res) => {
	res.send("Entry to Amusement Park");
});

// check for age in query parameters
app.get("/ride1", ageMiddleware, (req, res) => {
	res.status(200).json({
		msg: "You have successfully riden ride 1",
	});
});

// check for age in query parameters
app.get("/ride2", ageMiddleware, (req, res) => {
	res.status(200).json({
		msg: "You have successfully riden ride 2",
	});
});

app.listen(PORT, () => {
	console.log(`server is listening on: http://localhost:${PORT}`);
});
