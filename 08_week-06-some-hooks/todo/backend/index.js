const express = require("express");
const cors = require("cors");
const { todoSchema } = require("./types");

const app = express();

const PORT = process.env.PORT || 3000;

require("dotenv").config();

// to access backend from react frontend
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

let COUNTER = 1;

const todoList = [
  { id: COUNTER++, title: "Gym Workout", description: "Do some exercise" },
  {
    id: COUNTER++,
    title: "Make Food",
    description: "Prepare dinner for night",
  },
  {
    id: COUNTER++,
    title: "Project detailing",
    description: "Work on the intended projects",
  },
  {
    id: COUNTER++,
    title: "Cleanup",
    description: "House and Table is dirty, clean the house",
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/todo", (req, res) => {
  if (todoList.length === 0) {
    return res.status(200).json({ message: "No Todos found", todos: [] });
  }

  res.status(200).json({ message: "Todo List found", todos: todoList });
});

app.post("/todo", (req, res) => {
  const todoData = req.body;
  const parsedData = todoSchema.safeParse(todoData);
  // console.log(parsedData);

  if (!parsedData.success) {
    res.status(411).json({ message: "Wrong Inputs" });
    return;
  }

  const { title, description } = parsedData.data;

  const newTodo = { id: COUNTER++, title: title, descritpion: description };
  // use 'unshift' method to add newTodo to the Start of the Array
  todoList.push(newTodo);
  // console.log(todoList);

  // make sure to send the response forward
  res.status(201).json({ message: "Todo Created", todos: todoList });
});

app.listen(PORT, () => {
  console.log(`server is running at: http://localhost:${PORT}`);
});
