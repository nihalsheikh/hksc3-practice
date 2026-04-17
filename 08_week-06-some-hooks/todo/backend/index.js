const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

require("dotenv").config();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

const todoList = [
  { id: 1, title: "Gym Workout", description: "Do some exercise" },
  { id: 2, title: "Make Food", description: "Prepare dinner for night" },
  {
    id: 3,
    title: "Project detailing",
    description: "Work on the intended projects",
  },
  {
    id: 4,
    title: "Cleanup",
    description: "House and Table is dirty, clean the house",
  },
];

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/todo", (req, res) => {
  res.json(todoList);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running at: http://localhost:${PORT}`);
});
