console.log("This is a test javascript script");

function sumAnswer() {
	const a = document.getElementById("n1").value;
	const b = document.getElementById("n2").value;

	const sum = parseInt(a) + parseInt(b);

	const answer = document.getElementById("sumAnswer");

	answer.innerHTML = `${a} + ${b} = ${sum}`;
}
