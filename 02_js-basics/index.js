// var, let, const
// var a = 1;
// a = 2;
// console.log(a);

// let firstName = "John";
// let age = 24;
// let isMarried = "monkey";

// console.log("This person's name is " + firstName + " and age is " + age);

// if (isMarried == true) {
// 	console.log(firstName + " is married.");
// }

// if (isMarried == false) {
// 	console.log(firstName + " is not married.");
// }

// Callback Function
function printAnswer(a) {
	console.log(`answer is: ${a}`);
}

function test(num1, num2, printFn) {
	const ans = num1 + num2;
	printFn(ans);
}

test(2, 3, printAnswer);

function greet() {
	console.log("Hello World");
}

setTimeout(greet, 2 * 1000);
console.log("Timeout Done, Interval Starts");

setInterval(greet, 3 * 1000);
