var a = "abscaahfauohfai";

// String Length
function getLength(str) {
	console.log("Original String:", str);
	console.log("String Length:", str.length);
}

// getLength(a); // un-comment to use

// Index Of a word in a String
// Finds the FIRST MATCH
function findIndexOf(str, target) {
	console.log("Original String:", str);
	console.log("First Matched Index:", str.indexOf(target));
}

// findIndexOf("Hello, World!", "World"); // un-comment to use

// For LAST MATCH
function findLastIndexOf(str, target) {
	console.log("Original String:", str);
	console.log("Last Matched Index:", str.lastIndexOf(target));
}

// findLastIndexOf("Hey Hey Hey, Wassup", "Hey"); // un-comment to use

// Slice (Part) of a String
function getSlice(str, start, end) {
	console.log("Original String:", str);
	console.log("After Slice:", str.slice(start, end));
}

// getSlice("Hellopafja World", 0, 5); // un-comment to use

// Replace the String
function replaceString(str, target, replacement) {
	console.log("Original String:", str);
	console.log("Replaced:", str.replace(target, replacement));
}

// replaceString("Hey There", "Hey", "Hello"); // un-comment to use

// Split String based on separator
const words = "Hello World! This is CS50";
// console.log(words.split(" "));

//  Trim (remove whitespace before adn after the string)
const words2Trim = "    This is CS50     ";
// console.log(words2Trim.trim());

// To Uppercase the string letters
const words2Upper = "this is web dev javascript";
// console.log(words2Upper.toUpperCase());

// To Lowercase the string letters
const words2Lower = "THIS IS WEB DEV JS";
console.log(words2Lower.toLowerCase());
