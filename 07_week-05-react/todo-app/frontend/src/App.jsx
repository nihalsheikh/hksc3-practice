import "./App.css";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const App = () => {
	return (
		<div className="container">
			<CreateTodo />
			<TodoList />
		</div>
	);
};

export default App;
