const CreateTodo = () => {
	return (
		<div className="form">
			<input className="formInput" type="text" placeholder="Todo Title" />
			<textarea
				className="formInput textarea-height"
				type="text"
				placeholder="Describe your todo"
			/>

			<button className="todo-add-btn">Add Todo</button>
		</div>
	);
};

export default CreateTodo;
