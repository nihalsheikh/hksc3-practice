// JSON.stringify => to convert JS Object to String
const user = {
	firstName: "John",
	lastName: "Wick",
	age: 24,
	isAdult: true,
};

const userString = JSON.stringify(user);
console.log("String:", userString);

// JSON.parse => to convert JS String back to Object
const userObj = JSON.parse(userString);
console.log("Object:", userObj);
