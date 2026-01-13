const express = require("express");
const app = express();

const PORT = 3000;

var users = [
	{
		name: "John",
		kidneys: [{ healthy: false }, { healthy: true }],
	},
];

app.use(express.json()); // middleware that parse data from JSON format

app.get("/", (req, res) => {
	const johnKidneys = users[0].kidneys;
	const totalKidneys = johnKidneys.length;

	const numberOfHealthyKidneys = 0;

	for (let i = 0; i < johnKidneys; i++) {
		if (johnKidneys[i].healthy) {
			numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
		}
	}

	const numberOfUnhealthyKidneys = totalKidneys - numberOfHealthyKidneys;

	res.send({
		totalKidneys,
		numberOfHealthyKidneys,
		numberOfUnhealthyKidneys,
	});
});

app.post("/", (req, res) => {
	// console.log(req.body); // json body needs to be parsed before accessing, otherwise we get 'undefined'
	const isHealthy = req.body.isHealthy;
	users[0].kidneys.push({
		healthy: isHealthy,
	});

	res.json({
		msg: "Done!",
	});
});

app.put("/", (req, res) => {
	for (let i = 0; i < users[0].kidneys.length; i++) {
		users[0].kidneys[i].healthy = true;
	}
});

// app.delete("/", (req, res) => {});

app.listen(PORT, () => {
	console.log(`server is listening on: http://localhost:${PORT}`);
});
