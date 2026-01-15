const express = require("express");
const app = express();

const PORT = 3000;

var users = [
	{
		name: "John",
		kidneys: [{ healthy: false }],
	},
];

app.use(express.json()); // middleware that parse data from JSON format

// Get info of all the kidneys
app.get("/", (req, res) => {
	const johnKidneys = users[0].kidneys;
	const totalKidneys = johnKidneys.length;

	let numberOfHealthyKidneys = 0;

	for (let i = 0; i < totalKidneys; i++) {
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

// add new kidney
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

// change the health status of kidneys
app.put("/", (req, res) => {
	for (let i = 0; i < users[0].kidneys.length; i++) {
		users[0].kidneys[i].healthy = true;
	}

	res.json({
		msg: "all healthy again!",
	});
});

// Remove unhealthy kidneys
app.delete("/", (req, res) => {
	if (isThereUnhealthyKidney()) {
		const newKidneys = [];
		for (let i = 0; i < users[0].kidneys.length; i++) {
			if (users[0].kidneys[i].healthy) {
				newKidneys.push({
					healthy: true,
				});
			}
		}

		users[0].kidneys = newKidneys;

		res.json({
			msg: "Deleted Unhealthy Kidneys",
		});
	} else {
		res.status(411).json({ msg: "no unhealthy kidneys found" });
	}
});

function isThereUnhealthyKidney() {
	// Send status code: 411 for wrong input
	// if atleast one kidney is unheathy do this, otherwise send status 411
	let atleastOneUnhealthyKidney = false;
	for (let i = 0; i < users[0].kidneys.length; i++) {
		if (!users[0].kidneys.healthy) {
			atleastOneUnhealthyKidney = true;
		}
	}

	return atleastOneUnhealthyKidney;
}

app.listen(PORT, () => {
	console.log(`server is listening on: http://localhost:${PORT}`);
});
