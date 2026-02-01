console.log("This is a test javascript script");

let timeout;
function debounceRequest() {
	// clear the clock first
	clearTimeout(timeout);

	// start a new clock, or call the sumAnswer Function after the clock time ends
	timeout = setTimeout(() => {
		sumAnswer();
	}, 1000); // time delay of 1 second or 1000 ms
}

function sumAnswer() {
	const a = document.getElementById("n1").value;
	const b = document.getElementById("n2").value;

	const sum = parseInt(a) + parseInt(b);

	const answer = document.getElementById("sumAnswer");

	answer.innerHTML = `${a} + ${b} = ${sum}`;
}
