/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 * @param {number} arraySize - size of array
 * @param {?} value - value to fill
 * @returns {Array}
 */

/* func fill(size, value){
    return new Array(size).fill(value)
} */

let fill = (size, value) => {
  //stuff here
  return new Array(size).fill(value);
};
console.log(fill(3, "a"));

/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */

/**
 * Iterate from last index to 0 index
 * Array.push(array[i])
 * after loop return array
 */

let reverse = (array) => {
  let newArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
  //stuff here
  //builtin method:  return array.reverse()
};

console.log(reverse([1, 2, 3, 4, 5, 6]));

/**
 * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
 * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - An array of any elements
 * @returns {Array}
 *
 * All items are known as falsy. A Boolean check will remove falsy items
 */

let remove = (array) => {
  return array.filter((el) => Boolean(el));
};

let removed1 = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (!Boolean(array[i])) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
  //stuff here use loop
};

console.log(remove([0, 1, false, 2, undefined, "", 3, null]));
console.log(removed1([0, 1, false, 2, undefined, "", 3, null]));
/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 * @param {Array} array - Array of primitive data types
 * @param {?} args list of values to remove
 * @returns {Array}
 *
 * function two parameters: array, element to remove
 * create new empty array to push items to
 * iterate through array
 * check to see if item is not in new array. If it isn't push it
 *
 * function without = (array, element) =>{
 *     let newArr = []
 *     for(let i = 0; i<array.length; i++){
 *          if(!newArray.indexOf(element) === -1) newArray.push(array[i])
 * }
 * return newArray
 * }
 */

let without = (array, ...element) => {
  return array.filter((el) => {
    return element.indexOf(el) === -1;
  });
};

let without1 = (array, ...el) => {
  //stuff here use loop
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (el.indexOf(array[i]) === -1) newArr.push(array[i]);
  }
  return newArr;
};

console.log(without([1, 2, 3, 4, 5], 1, 3));
console.log(without1([1, 2, 3, 4, 5], 1, 3));

/**
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 * Task Complexity: 2 of 5
 * @param {Array<string | number>} array - Array of primitive data types
 * @returns {Array}
 *
 */

let noDupes = (array) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (newArr.indexOf(array[i]) === -1) newArr.push(array[i]);
  }
  return newArr;
};

console.log(noDupes([1, 2, 3, 1, 2]), "noDupes");

/**
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 *
 * recursive question:
 * function takes in deep array
 * create new empty array to put values in that are not a typeof array
 * loop through array
 * if not typeof array push item into new array
 * else if typeof is an array recurse the function with array[i] item as the argument
 */

let deep = (array) => {
  //stuff here
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) newArr.push(array[i]);
    else if (Array.isArray(array[i])) {
      newArr = newArr.concat(deep(array[i]));
    }
  }
  return newArr;
};

console.log(
  deep([1, 2, [3, 4, [5]]]),
  "Deep Array: [1, 2, [3, 4, [5]]] -> [1, 2, 3, 4, 5]"
);
