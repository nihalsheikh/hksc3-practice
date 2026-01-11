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
	res.send("Hospital Waiting Area");
});

app.post("/", (req, res) => {});

app.put("/", (req, res) => {});

app.delete("/", (req, res) => {});

app.listen(PORT, () => {
	console.log(`server is listening on: http://localhost:${PORT}`);
});
