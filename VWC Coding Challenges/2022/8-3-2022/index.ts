/**
 * Write a JavaScript program to compute the absolute difference between a specified number and 19.
 * Returns triple their absolute difference if the specified number is greater than 19.
*/
const differenceTo19 = (num: number): number => {
  const difference = Math.abs(num - 19)
  return difference > 19 ? 3 * difference : difference
}
console.log(differenceTo19(18)) // 1
console.log(differenceTo19(20)) // 1
console.log(differenceTo19(39)) // 60