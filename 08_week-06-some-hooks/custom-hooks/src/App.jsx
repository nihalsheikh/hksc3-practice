  import { useState, useEffect } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    //  make sure to run the backend
    fetch("http://localhost:3000/todo")
      .then((res) => res.json())
      .then((data) => setTodos(data.todos));
  }, []);

  return todos;
};

const App = () => {
  const todos = useTodos();

  return (
    <>
      <h1>Home Todo: Custom Hooks</h1>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
