const { z } = require("zod");

/* User
{ username: johndoe, email: johndoe@gmail.com, password: ******** }
*/
const userSchema = z.object({
	username: z.string().max(50).min(2),
	email: z.string().email(),
	password: z.string().min(8),
	// date: z.date(),
});

// { id: abc123, title: "some-title", description: "some-description" }
const todoSchema = z.object({
	title: z.string().max(20).min(1),
	description: z.string().max(70).min(1),
	completed: z.boolean().optional(),
	// date: z.date(),
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
