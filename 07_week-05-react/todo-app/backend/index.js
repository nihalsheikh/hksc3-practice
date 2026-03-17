const express = require("express");

const { todoSchema, updateTodoSchema } = require("./types");
const { Todo, User } = require("./db");

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
app.post("/todo", async function (req, res) {
	const todoData = req.body;
	const parsedData = todoSchema.safeParse(todoData);

	if (!parsedData.success) {
		res.status(411).json({ message: "You sent the wrong inputs" });
		return;
	}

	// add todo in db
	try {
		await Todo.create({
			title: parsedData.title,
			description: parsedData.description,
			completed: false,
		});

		res.status(200).json({ message: "Todo created successfully." });
	} catch (error) {
		console.log("Error creating Todo", error);
		res.status(500).json({ message: "Todo was not created." });
	}
});

// get all todos
app.get("/todos", async function (req, res) {
	try {
		const todos = await Todo.find();
		res.status(200).json({ todos });
	} catch (error) {
		console.log("No todos found", error);
		res.status(500).json({ message: "No todos found" });
	}
});

// mark todo as completed
app.put("/completed", async function (req, res) {
	const updatedTodo = req.body;
	const parsedTodo = updateTodoSchema.safeParse(updatedTodo);

	if (!parsedTodo.success) {
		res.status(411).json({ message: "Invalid update" });
		return;
	}

	// update status in db
	try {
		await Todo.update({ _id: req.body.id }, { completed: true });
		res.status(200).json({ message: "Todo marked as completed" });
	} catch (error) {
		console.log("Todo not completed", error);
		res.status(500).json({ message: "Todo not completed" });
	}
});

// delete a todo
app.delete("/todos/:id", async function (req, res) {
	try {
		const { id } = req.body;
		const deleted = await Todo.findByIdAndDelete(id);

		if (!deleted)
			return res.status(404).json({ message: "Todo not found" });

		res.status(200).json({ message: "Todo deleted" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.listen(PORT, function () {
	console.log(`server is listening on: http://localhost:${PORT}`);
});
