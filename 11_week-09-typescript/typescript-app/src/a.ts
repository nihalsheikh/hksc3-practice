function greet(firstName: string) {
  console.log("Hello " + firstName);
}
// greet("Nihal");

function sum(x: number, y: number): number {
  return x + y;
}
// console.log(sum(1, 2));

function isLegal(age: number): boolean {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
// console.log(isLegal(16));

function runAfterOneSec(anotherFn: () => void) {
  setTimeout(anotherFn, 1000);
}
// runAfterOneSec(() => {
//   console.log("Hii from anotherFn");
// });

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function isLegal2(user: User): boolean {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal2({ firstName: "Nihal", lastName: "Sheikh", age: 26 }));
