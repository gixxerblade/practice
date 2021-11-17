/**
 * Write a JavaScript program that given two arguments generates
 * an array of random integers. The first argument is the array
 * length and the second argument is the max number for each item
 * in the array.
 * @Input
 * genRandomArray(3, 5);
 * @Output
 * [0, 5, 3]
*/

const genRandomArray = (len: number, max: number): number[] => {
  return Array.from({ length: len }, () => Math.ceil(Math.random() * max))
}
console.log(genRandomArray(3, 5))
console.log(genRandomArray(10, 55))
console.log(genRandomArray(7, 15))