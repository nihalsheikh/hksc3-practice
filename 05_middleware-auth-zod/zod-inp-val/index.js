const express = require("express");
const zod = require("zod");

const app = express();

const PORT = 3000;

// Structure of our input
const kidneyArr = zod.array(zod.number());

app.use(express.json()); 

app.post("/health-checkup", function (req, res) {
	// expected input: {kidneys: [1, 2]}
	const kidneys = req.body.kidneys;
	const response = kidneyArr.safeParse(kidneys);

	res.send({
		response,
	});
});

app.listen(PORT);
