// @here Write a JavaScript program to perform left-to-right function composition.
// Input:
// console.log(multiplyAndAdd5(5, 2));
// console.log(multiplyAndAdd5(16, 2));
// Output:
// 15
// 37

const addFive = (x) => {
  return x + 5;
};
const mul = (x, y) => {
  return x * y;
};
const multiplyAndAdd5 = (x, y) => addFive(mul(x, y));

console.log(multiplyAndAdd5(5, 2));
console.log(multiplyAndAdd5(16, 2));