const express = require("express");
const app = express();

const PORT = 3000;

var users = [
	{
		name: "John",
		kidneys: [{ healthy: false }, { healthy: true }],
	},
];

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

// app.post("/", (req, res) => {});

// app.put("/", (req, res) => {});

// app.delete("/", (req, res) => {});

app.listen(PORT, () => {
	console.log(`server is listening on: http://localhost:${PORT}`);
});
