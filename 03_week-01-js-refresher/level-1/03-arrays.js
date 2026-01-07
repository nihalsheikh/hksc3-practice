// Push: add element to end of array
const arr1 = [1, 2, 3, 4];
arr1.push(2);
// console.log(arr1);

// Pop: remove last element form the array
const arr2 = [5, 6, 7];
arr2.pop();
// console.log(arr2);

// Shift: remove element from the start
const arr3 = [8, 9, 10];
arr3.shift();
// console.log(arr3);

// Unshift: add element to the start ofconst arr4 = [3, 4, 5, 6] the array
const arr4 = [3, 4, 5, 6];
arr4.unshift(20);
// console.log(arr4);

// Concat: merge two different arrays
const arrOne = [1, 2, 3, 4];
const arrTwo = [5, 6, 7, 8];
const arrThree = arrOne.concat(arrTwo);
// console.log(arrThree);

// ForEach: takes a fn as an arg (callback fn)
const arr5 = [5, 6, 7, 8];

function greetMe(str) {
	console.log(str);
}

arr5.forEach(greetMe);
