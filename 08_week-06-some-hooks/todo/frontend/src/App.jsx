import { useState } from "react";
import Todo from "./components/Todo";
import TodoId from "./components/TodoId";

function App() {
  const [todoId, setTodoId] = useState(1);

  return (
    <>
      This is home page
      <br />
      <Todo />
      <br />
      <button onClick={() => setTodoId(1)}>1</button>
      <button onClick={() => setTodoId(2)}>2</button>
      <button onClick={() => setTodoId(3)}>3</button>
      <button onClick={() => setTodoId(4)}>4</button>
      <TodoId todoId={todoId} />
    </>
  );
}

export default App;
