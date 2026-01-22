const express = require("express");
const app = express();

const PORT = 3000;

// before all the routes
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hospital Waiting Area");
});

app.post("/health-checkup", (req, res) => {
	// Expecting: kidneys = [1, 2]
	const kidneys = req.body.kidneys;
	if (!kidneys) {
		res.status(404).json({
			msg: "kidneys not found",
		});

		return;
	}

	const kidneyLength = kidneys.length;

	res.send(`Kidney length: ${kidneyLength}`);
});

// Global Catches
app.use(function (err, req, res, next) {
	res.send({ msg: "Error, something is up with the server" });
});

app.listen(PORT, () => {
	console.log(`server is listening on http://localhost:${PORT}`);
});
