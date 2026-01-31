const express = require("express");
const app = express();

const PORT = 3000;

function simpleInterest() {
	const principalAmount = document.getElementById("pric").value;
	const rate = document.getElementById("rate").value;
	const time = document.getElementById("time").value;

	const result =
		(parseInt(principalAmount) * parseInt(rate) * parseInt(time)) / 100;

	const answerP = document.getElementById("answer");

	answerP.innerHTML = `Simple Interest is: ${result}`;
}

app.get("/interest", (req, res) => {
	// Principal Amount
	const principal = req.query.principal;
	// Rate of Interest
	const rate = req.query.rate;
	// Time (in years)
	const time = req.query.time;

	const result =
		// query params are string, so convert it into number
		(parseInt(principal) * parseInt(rate) * parseInt(time)) / 100;

	res.status(200).send(`Simple Interest is: ${result}`);
});

// PORT, server is listening to
app.listen(PORT, () => {
	console.log(`server is on http://localhost:${PORT}`);
});
