function addTodo() {
	const task = document.getElementById("task").value;
	const timing = document.getElementById("timing").value;

	const todoTaskList = document.getElementById("todo-task-list").innerHTML;

	document.getElementById("todo-task-list").innerHTML =
		todoTaskList +
		`
			<div class="todo-task">
				<label for="task-details">Task Details:</label>
				<p id="task-details">${task}</p>

				<label for="task-timing">Timing:</label>
				<p id="task-timing">${timing}</p>

				<button id="task-done" class="task-done-btn">
					Mark as done
				</button>
			</div>
		`;
}
