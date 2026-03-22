import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

const App = () => {
	return (
		<div className="container">
			<CreateTodo />
			<Todos />
		</div>
	);
};

export default App;
