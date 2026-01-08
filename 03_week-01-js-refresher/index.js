const { clear } = require("console");
const fs = require("fs");

function readSomeFile() {
	console.log("Inside the readSomeFile Function");
	return new Promise(function (resolve) {
		console.log("Inside Promise");
		fs.readFile("a.txt", "utf-8", function (err, data) {
			console.log("Before Resolve");
			resolve(data);
		});
	});
}

function onDone(data) {
	console.log(data);
}

readSomeFile().then(onDone);
