import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<CustomButton count={count} setCount={setCount} />
		</div>
	);
}

// Button Component
// props => {count, setCount}
function CustomButton(props) {
	const onClickHandler = () => {
		props.setCount(props.count + 1);
	};

	return <button onClick={onClickHandler}>Counter {props.count}</button>;
}

// Custom Todo Component
function addTodoBtn(props) {
	// use previos state to make change to a state variable
	// don't make changes directly to the state variable
	props.setTodo((prev) => [...props.todos, { prev }]);
}
// create new todo
function CustomTodo() {
	// adds a new todo to list
	addTodoBtn();
}

export default App;
