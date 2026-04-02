import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

const App = () => {
	const [todos, setTodos] = useState([]);



	return (
		<div className="container">
      <CreateTodo setTodos={setTodos} todos={todos} />

			<Todos todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
