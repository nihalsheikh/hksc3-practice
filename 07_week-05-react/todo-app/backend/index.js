const express = require("express");
const { todoSchema, updateTodoSchema } = require("./types");
const app = express();

const PORT = process.env.PORT || 3000;

// env vars
require("dotenv").config();

// parse req body middleware
app.use(express.json());

// Authentication
// signup
app.post("/signup", function (req, res) {});

// signin
app.get("/signin", function (req, res) {});

// CRUD on TODO
// create a todo
app.post("/todo", function (req, res) {
	const todoData = req.body;
	const parsedData = todoSchema.safeParse(todoData);

	if (!parsedData.success) {
		res.status(411).json({ message: "You sent the wrong inputs" });
		return;
	}

	// add todo in db
	const newTodo = new Todo(parsedData);
});

// get all todos
app.get("/todos", function (req, res) {});

// mark todo as completed
app.put("/completed", function (req, res) {
	const updatedTodo = req.body;
	const parsedTodo = updateTodoSchema.safeParse(updatedTodo);

	if (!parsedTodo.success) {
		res.status(411).json({ message: "Invalid update" });
		return;
	}

	// update status in db
});

// delete a todo
app.delete("/delete", function (req, res) {});

app.listen(PORT, function () {
	console.log(`server is listening on: http://localhost:${PORT}`);
});
