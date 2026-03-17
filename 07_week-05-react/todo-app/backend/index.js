const express = require("express");
const { createTodo, updateTodo } = require("./types");

// environment variables
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

// parse text
app.use(express.json());

// make a todo
app.post("/todo", (req, res) => {
	const createData = req.body;
	const parsedData = createTodo.safeParse(createData);

	if (!parsedData.success) {
		res.status(411).json({ message: "You sent the wrong inputs" });
		return;
	}
});

// get all todos
app.get("/todos", (req, res) => {});

// update a todo
app.put("/completed", (req, res) => {});

// delete a todo
app.delete("/deleted", (req, res) => {});

// server is listening on PORT
app.listen(PORT, () => {
	console.log(`server is listening on: http://localhost:${PORT}`);
});
