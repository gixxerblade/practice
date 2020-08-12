/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 * @param {number} arraySize - size of array
 * @param {?} value - value to fill
 * @returns {Array}
 */
const fill = (arraySize, value) => {
  return new Array(arraySize).fill(value);
};
const data1 = 3;
const valueToFill = "a";
console.log(fill(data1, valueToFill)); // ['a', 'a', 'a']

/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */
const reverse = (array) => {
  //throw new Error('Put your solution here');
  let reversedArr = [];
  for (let i = 0; i <= array.length; i++) {
    reversedArr.push(array.pop(i));
  }
  reversedArr.push(array[0]);
  return reversedArr;
};
const data2 = [1, 2, 3];
console.log(reverse(data2)); // [3, 2, 1]
/**
 * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
 * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
const compact = (array) => {
  return (nums = array.filter((el) => Number(el)));
};
const data3 = [0, 1, false, 2, undefined, "", 3, null];
console.log(compact(data3)); // [1, 2, 3]
/**
 * Task description: Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Task Complexity: 2 of 5
 * @param {Array} array - a deep array of pairs
 * @returns {Array}
 */
const fromPairs = (array) => {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[array[i][0]] = array[i][1];
  }
  return obj;
};
const data4 = [
  ["a", 1],
  ["b", 2],
];
console.log(fromPairs(data4)); // { 'a': 1, 'b': 2 }
/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 * @param {Array} array - Array of primitive data types
 * @param {?} args list of values to remove
 * @returns {Array}
 */
const without = (array, ...args) => {
  let result = array.filter((el) => args.indexOf(el) === -1);
  return result;
};
const data5 = [1, 2, 3, 1, 2];
console.log(without(data5, 1, 2)); // [3]
/**
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 * Task Complexity: 2 of 5
 * @param {Array<string | number>} array - Array of primitive data types
 * @returns {Array}
 */
const unique = (array) => {
  let special = new Set(array);
  return Array.from(special);
};
const data6 = [1, 2, 1, 2, 3];
console.log(unique(data6)); // [1, 2, 3]
/**
 * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical.
 * Expected Result: ([1, 2, 3], [1, 2, 3]) => true
 * Task Complexity: 2 of 5
 * @param {Array} firstArray - Array of primitive data types
 * @param {Array} secondArray - Array of primitive data types
 * @returns {boolean}
 */
const isEqual = (firstArray, secondArray) => {
  //check if equal len
  return (
    firstArray.length === secondArray.length &&
    //Check every value against every value of other array
    firstArray.every((el, idx) => el === secondArray[idx])
  );
};
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false
/**
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 */
const flatten = (array) => {
  // throw new Error("Put your solution here");
};
const data8 = [1, 2, [3, 4, [5]]];
//console.log(flatten(data8)); // [1, 2, 3, 4, 5]
/**
 * Task description: Write a method that splits an array into parts of determined size
 * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * Task complexity: 3 of 5
 * @param {Array} array - An array of any elements
 * @param {number} size - size of chunks
 * @returns {Array}
 */
const chunk = (array, size) => {
  // throw new Error("Put your solution here");
};
const data9 = [1, 2, 3, 4, 5, 6, 7];
//console.log(chunk(data9, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
//console.log(chunk(data9, 3)); // [[1, 2, 3], [4, 5, 6], [7]]
/**
 * Task description: Write a method that creates an array of unique values that are included in all given arrays
 * Expected Result: ([1, 2], [2, 3]) => [2]
 * Task complexity: 4 of 5
 * @param {?} arrays - Arrays of primitive data types
 * @returns {Array}
 */
const intersection = (...arrays) => {
  //throw new Error("Put your solution here");
};
const arr11 = [1, 2];
const arr22 = [2, 3];
const arr33 = ["a", "b"];
const arr44 = ["b", "c"];
const arr55 = ["b", "e", "c"];
const arr66 = ["b", "b", "e"];
const arr77 = ["b", "c", "e"];
const arr88 = ["b", "e", "c"];
//console.log(intersection(arr11, arr22)); // [2]
//console.log(intersection(arr33, arr44, arr55)); // ['b']
//console.log(intersection(arr66, arr77, arr88)); // ['b', 'e']
