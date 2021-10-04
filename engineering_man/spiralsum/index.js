// Given the size of a spiral, calcuale the sum of the four corners.

const value1 = process.argv[2];
const test1 = [
  [1, 2],
  [3, 4],
];
const test2 = [
  [7, 8, 9],
  [6, 1, 2],
  [5, 4, 3],
];
const spiralSum = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    for (let j = 0; j < element.length; j++) {
      const el = element[j];
      console.log(el);
    }
  }
};

console.log(spiralSum(test1));
