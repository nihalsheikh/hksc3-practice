const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
	res.send(`Hello: This is Port: ${PORT}`);
});

app.post()

app.listen(PORT, function () {
	console.log(`server is listening on: http://localhost:${PORT}`);
});
