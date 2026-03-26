import { useState } from "react";

/*
	todos = [{ title: "abc123", description: "abc123ohujhd"}]
*/
const Todos = ({ todos }) => {
	const [isComplete, setCompleted] = useState(false); // complete-btn

	// when called, set todo as 'true'
	const markDoneBtn = () => {
		setCompleted(true);
	};

	return (
		<div>
			{todos.map((todo) => (
				<div className="alltodos" key={todo.title}>
					<h1>{todo.title}</h1>

					<p>{todo.description}</p>

					<div className="todo-btns-container ">
						<button
							className="todobtn-done"
							onClick={markDoneBtn}
							disabled={isComplete}
						>
							{isComplete ? "Completed" : "Mark as done"}
						</button>
						<button className="todobtn-remove">Remove</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Todos;
