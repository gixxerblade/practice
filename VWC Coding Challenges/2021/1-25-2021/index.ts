// Write a JavaScript program that given two arguments generates an array of random integers. The first argument is the array length and the second argument is the max number for each item in the array.

const genRandomArray = (arrLength: number, maxNumber: number): number[] => {
  let result: number[] = new Array(arrLength);
  for (let i = 0; i < result.length; i++) {
    result[i] = Math.floor(Math.random() * maxNumber);
  }
  return result;
};
console.log(genRandomArray(3, 5));
console.log(genRandomArray(10, 7));
console.log(genRandomArray(30, 255));
