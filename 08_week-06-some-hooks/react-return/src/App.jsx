import { useState } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";

let COUNTER = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "morning exercise",
      description: "Workout and weighlifting exercise from 7 am to 8 am",
    },
    {
      id: 2,
      title: "Shopping",
      description: "Go to local market, but some vegetables",
    },
    {
      id: 3,
      title: "Breakfast",
      description: "after all workout and shopping, have some breakfast",
    },
  ]);

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: COUNTER++,
        title: `new todo ${Math.floor(Math.random() * 10)}`,
        description: `adding a new todos ${Math.floor(Math.random() * 10)}`,
      },
    ]);
  };

  return (
    <>
      <Header title="This is Todo App" />
      <br />
      <button onClick={addTodo}>Add a todo</button>
      <br />
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo title={todo.title} description={todo.description} />
        </div>
      ))}
    </>
  );
}

export default App;
