const input = [1, 2, 3, 4, 5];

function transform(n) {
	return n * 2;
}

function someArrFunc(arr, transform) {
	return arr.map(transform);
}

const newArr = someArrFunc(input, transform);
console.log(newArr);

// Filter Logic
function filterEven(n) {
	if (n % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

const ans = input.filter(filterEven);
console.log("Original arr:", input, "Filtered arr:", ans);
