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
	props.setTodo((prev) => [...props.todos, { prev }]);
}
function CustomTodo() {
	addTodoBtn();
}

export default App;
