/* 
Create a function that takes four arrays as arguments and returns a count of the total number of identical arrays.
Examples
countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]) ➞ 2
countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0]) ➞ 0
countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]) ➞ 3
*/

const countIdenticalArrays = (...arr) => {
  let newArr = Array.from(new Set(arr.map(JSON.stringify)), JSON.parse);
  return arr.length - newArr.length > 0
    ? (count = arr.length - newArr.length + 1)
    : (count = 0);
};

console.log(countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0])); // 2
console.log(countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0])); // 0
console.log(countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0])); // 3
