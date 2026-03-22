import { useState } from "react";

const Todos = ({ title, description }) => {
	const [isComplete, setCompleted] = useState(false); // complete-btn

	// when called, set todo as 'true'
	const markDoneBtn = () => {
		setCompleted(true);
	};

	return (
		<div className="alltodos">
			<h1>{title}</h1>

			<p>{description}</p>

			<div className="todo-btns-container ">
				<button className="todobtn-done" onClick={markDoneBtn} disabled={isComplete}>
					{isComplete ? "Completed" : "Mark as done"}
				</button>
				<button className="todobtn-remove">Remove</button>
			</div>
		</div>
	);
};

export default Todos;
