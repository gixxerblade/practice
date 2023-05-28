/**
 * Write a JavaScript program that given two arguments generates an array of random integers. The first argument is the array length and the second argument is the max number for each item in the array.
 * Input
 * genRandomArray(3, 5);
 * Output
 * [0, 5, 3]
 * 
 */

const genRandomArray = (length, max) => Array.from({ length }, () => Math.floor(Math.random() * max))
console.log(genRandomArray(3, 5));