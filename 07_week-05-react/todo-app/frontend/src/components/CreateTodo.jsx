import { useState } from "react";

const CreateTodo = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};

	const addTodo = async () => {
		try {
			const result = await fetch("http://localhost:3000/todo", {
				method: "POST",
				body: JSON.stringify({ title, description }),
				headers: { "Content-type": "application/json" },
			});

			if (!result.ok) throw new Error("Failed to add todo");

			await result.json();
			alert("Todo added");
		} catch (error) {
			console.error(error);
			alert("Error adding todo");
		}
	};

	return (
		<div className="form">
			<input
				id="title"
				className="formInput"
				type="text"
				placeholder="Todo Title"
				value={title}
				onChange={handleTitleChange}
			/>

			<textarea
				id="description"
				className="formInput textarea-height"
				type="text"
				placeholder="Todo Description"
				value={description}
				onChange={handleDescriptionChange}
			/>

			<button className="todo-add-btn" onClick={addTodo}>
				Add Todo
			</button>
		</div>
	);
};

export default CreateTodo;
