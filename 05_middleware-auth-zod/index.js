const express = require("express");
const app = express();

const PORT = 3000;

// Hospital Home route (waiting area)
app.get("/", (req, res) => {
	res.send("Hospital waiting area");
});

// Check your username password and id
app.get("/health-checkup", (req, res) => {
	const username = req.headers.username;
	const password = req.headers.password;
	const kidneyId = req.query.kidneyId;

	if (!username && !password) return;

	if (username != "nihal" && password == "pass") {
		res.status(403).json({
			msg: "User does not exist",
		});
		return;
	}

	if ((username == "nihal") & (password == "pass")) {
		if (!kidneyId) return;

		if (kidneyId == 1 || kidneyId == 2) {
			res.status(200).json({
				msg: `User: ${username} found with kidneyId: ${kidneyId}`,
			});
		} else {
			res.json({
				msg: "bad input",
			});
		}
	}

	if (kidneyId != 1 || kidneyId != 2) {
		res.status(411).json({
			msg: "Wrong Input",
		});
		return;
	}

	res.send(`${username ? username : "User"} is in good health`);
});

app.post("/", (req, res) => {});

app.listen(PORT, function () {
	console.log(`Hospital server is listening on: http://localhost:${PORT}`);
});
