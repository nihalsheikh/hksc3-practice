function calcSum(n) {
	let a = 0;
	for (let i = 0; i < n; i++) {
		a = a + i;
	}
	return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

calcSum(1000000);

const afterTime = new Date();
const afterTimeInMs = afterTime.getTime();

console.log("Time in ms:", afterTimeInMs - beforeTimeInMs);
