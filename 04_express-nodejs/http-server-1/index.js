const express = require("express");
const bodyParse = require("body-parser");

const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
	res.send("First HTTP Server");
});

app.use(bodyParse.json());

app.post("/conversation", function (req, res) {
	console.log(req.body);
	res.send({
		firstName: "John",
		lastName: "Wick",
		age: 32,
		exCommunicado: false,
	});
});

app.listen(PORT, function () {
	console.log(`server is listening on: http://localhost:${PORT}`);
});
