/**
 * Write a JavaScript program to calculate the factorial of a number.
 * Input
 * console.log(factorial(1));
 * console.log(factorial(5));
 * console.log(factorial(7));
 * Output
 * 1
 * 120
 * 5040
 */

const factorial = (num: number) => {
  if (num === 0) return 1
  return num * factorial(num - 1)
}

console.log(factorial(1))
console.log(factorial(5))
console.log(factorial(7))
console.log(factorial(8))