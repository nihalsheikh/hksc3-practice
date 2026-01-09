const person = {
	firstName: "John",
	getName() {
		console.log(this);
	},
};

person.getName();
