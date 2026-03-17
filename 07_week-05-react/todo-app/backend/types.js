const { z } = require("zod");

/* User
username: johndoe,
email: johndoe@gmail.com,
password: ********,
todos: [{id: 1234, title: "some-title", description: "some-description"}]
 */
const userSchema = z.object({
	username: z.string().max(50).min(2),
	email: z.email(),
	password: z.password(),
	todos: z.array(z.object(z.string())),
});

// Todo: {id: 1234, title: "some-title", description: "some-description"}
const todoSchema = z.object({
	title: z.string().max(20).min(5),
	description: z.string().max(70),
	completed: z.boolean(),
});

const updateTodoSchema = z.object({
	id: z.string(),
});

// export
module.exports = {
	userSchema,
	todoSchema,
	updateTodoSchema,
};
