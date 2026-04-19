import { useState, useEffect } from "react";

const TodoId = ({ todoId }) => {
  const [todo, setTodo] = useState([]);

  async function getTodoWithId() {
    const res = await fetch(`http://localhost:3000/todo?id=${todoId}`);
    const todoData = await res.json();
    setTodo(todoData.todos);
  }

  // ignore warnings
  useEffect(() => {
    getTodoWithId();
  }, [todoId]);

  return (
    <>
      <h1> ============= This is Searched Todo ============= </h1>
      <br />
      {todo.map(({ id, title, description }) => (
        <div key={id}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ))}
    </>
  );
};

export default TodoId;
