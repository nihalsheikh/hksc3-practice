const express = require("express");
const app = express();

const PORT = 3000;

function square(n) {
	return n * n;
}

function sumOfSquares(a, b) {
	return square(a) + square(b);
}

function cube(n) {
	return n * n * n;
}

function sumOfCubes(a, b) {
	return cube(a) + cube(b);
}

app.get("/", (request, response) => {
	response.send("Home Page");
});

app.get("/square", (req, res) => {
	const n = req.query.n;
	const ans = square(n);

	res.send(`Square(${n}) = ${ans}`);
});

app.get("/sumofsquares", (req, res) => {
	const a = req.query.a;
	const b = req.query.b;
	const ans = sumOfSquares(a, b);

	res.send(`Sqaure(${a}) + Square(${b}) = ${ans}`);
});

app.get("/cube", (req, res) => {
	const n = req.query.n;
	const ans = cube(n);

	res.send(`Cube(${n}) = ${ans}`);
});

app.get("/sumofcubes", (req, res) => {
	const a = req.query.a;
	const b = req.query.b;
	const ans = sumOfCubes(a, b);

	res.send(`Cube(${a}) + Cube(${b}) = ${ans}`);
});

app.listen(PORT, () => {
	console.log(`server is listening on: http://localhost:${PORT}`);
});
