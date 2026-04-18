import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todo").then(async (res) => {
      console.log(res);
      const todoJson = await res.json();
      setTodos(todoJson.todos);
    });
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoCard title={todo.title} description={todo.description} />
        </div>
      ))}
    </div>
  );
};

export default Todo;
