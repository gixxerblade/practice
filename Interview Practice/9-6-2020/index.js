/* Being told that an unsorted array contains (n - 1) of n consecutive numbers
 (where the bounds are defined), find the missing number in O(n) time */

let array1 = [2, 5, 1, 4, 9, 6, 3, 7];
let upperBound = 9;
let lowerBound = 1;

let findNum = (array, upper, lower) => {
  // add all known numbers together
  let sumOfExisting = 0;
  for (let i = 0; i < array.length; i++) {
    sumOfExisting += array[i];
  }
  // Gauss addition adds a series of numbers
  // find the upper limit of all the numbers added together
  // If lower is 1 we only need to find out the series 1...upper
  let upperLim = (upper * (upper + 1)) / 2;
  // find the lower limit of all numbers added together
  // If lower was greater than 1 then we would need this formula then
  // subtract from the upper
  let lowerLim = (lower * (lower - 1)) / 2; //

  let theorySum = upperLim - lowerLim;
  // Will show the missing number
  return theorySum - sumOfExisting;
};

console.log(findNum(array1, upperBound, lowerBound), 8);

/* Remove duplicates of an array and return an array of only unique 
elements
 */
let array2 = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

let removeDupes = (array) => {
  // Create a new array to put in the unique values
  let unique = [];
  // Loop over array and push items not in unique array
  for (let i = 0; i < array.length; i++) {
    if (unique.indexOf(array[i]) === -1) unique.push(array[i]);
  }
  return unique;
};

console.log(removeDupes(array2));

/* Given a string, reverse each word in the sentence*/

let string3 = "The brown fox jumped over the lazy dog";

let reverse = (str) => {
  // split the string into a string array separated by a space " "
  let stringArray = str.split(" ");
  // create empty array to push words to
  let newStringArray = [];
  // Iterate through the array starting at the last index
  for (let i = stringArray.length - 1; i >= 0; i--) {
    newStringArray.push(stringArray[i]);
  }
  // return joined newStringArray
  return newStringArray.join(" ");
};

console.log(reverse(string3));

/* Q5:   Write a "mul" function which will properly when invoked as below syntax.*/

// closure problem
let mul = (x) => {
  return (y) => {
    return (z) => {
      return x * y * z;
    };
  };
};

console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48

/* Q6: How to empty an array in JavaScript?*/
let array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// either assign an empty array of make the length of the array 0
array6 = [];
array6.length === 0;
console.log(array6);

/* Q7:   How to check if an object is an array or not? Provide some code. */

let array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayCheck = (array) => {
  // built in array method
  if (Array.isArray(array)) console.log(true);
  //check if Object appears in the prototype chain
  if (array instanceof Array) console.log(true);
  // Not reliable way of finding typeof array
  if (Object.prototype.toString.call(array) === "[object Array]") return true;
};

console.log(arrayCheck(array7));

/* Q8:   How would you use a closure to create a private counter? */

let count = () => {
  let counter = 0;
  return {
    add: (increment) => (counter += increment),
    sub: (decrement) => (counter -= decrement),
    print: () => {
      return `The count is ${counter}`;
    },
  };
};

let c = count();
c.add(9);
c.sub(4);
console.log(c.print());

/* Q9:   Write a function that would allow you to do this. */

let createBase = (base) => {
  return (num) => {
    return base + num;
  };
};

let addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

/* Q10:   How would you check if a number is an integer? */

let number = 10;
let float = 1.456;
let checkNumberIsInteger = (num) => {
  // any integer modulo 1 would equal 0
  // a float would have a remainder
  return num % 1 === 0;
};

console.log(checkNumberIsInteger(number));
console.log(checkNumberIsInteger(float));

/* Q11:   Explain what a callback function is and provide a simple example. */
// A callback function is a func that is called as an argument

let map = (array, cb) => {
  if (!Array.isArray(array)) return `${array} must be an array`;
  if (typeof cb !== "function") return "Not a function";
  else {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      newArr.push(cb(array[i]));
    }
    return newArr;
  }
};

console.log(
  map([1, 2, 3], (i) => {
    return i + 2;
  })
);

/* Q12:   FizzBuzz Challenge Create a for loop that iterates up to 100 while outputting 
"fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5. */

let fizzBuzz = (num) => {
  for (let i = 0; i < num; i++) {
    if (i % 15 === 0) console.log("fizzbuzz");
    else if (i % 5 === 0) console.log("buzz");
    else if (i % 3 === 0) console.log("fizz");
    else console.log(i);
  }
  return;
};

//fizzBuzz(100);

/* Q13:   Make this work
duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5] */

let duplicate = (array) => {
  return [...array, ...array];
};
console.log(duplicate([1, 2, 3, 4, 5]));

/** fibonacci
 * (num - 1) + (num - 2)
 * */

let fibonacci = (num) => {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(10), 55);

/**
 * / factorial
 *  num * num-1 */

let factorial = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(6), 720);

/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 * @param {number} arraySize - size of array
 * @param {?} value - value to fill
 * @returns {Array}
 */

let fillArray = (size, contents) => {
  return new Array(size).fill(contents);
};

console.log(fillArray(3, "a"));

/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */

let revert = (array) => {
  let revertedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    revertedArray.push(array[i]);
  }
  return revertedArray;
};

console.log(revert([1, 2, 3]), [3, 2, 1]);

/**
 * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
 * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - An array of any elements
 * @returns {Array}
 *
 * All items are known as falsy. A Boolean check will remove falsy items
 */

let truthy = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (!Boolean(array[i])) {
      array.splice(i, 1);
      // Goes back to the previous index and starts check all over again
      // if item is found and removed
      i--;
    }
  }
  return array;
};

let truthy1 = (array) => {
  return array.filter((i) => Boolean(i));
};

console.log(truthy([0, 1, false, 2, undefined, "", 3, null]), [1, 2, 3]);
console.log(truthy1([0, 1, false, 2, undefined, "", 3, null]), [1, 2, 3]);

/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 * @param {Array} array - Array of primitive data types
 * @param {?} args list of values to remove
 * @returns {Array}
 */

let without = (array, ...values) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (values.indexOf(array[i]) === -1) newArray.push(array[i]);
  }
  return newArray;
};

console.log(without([1, 2, 3, 1, 2], 1, 2));

/**
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 * Task Complexity: 2 of 5
 * @param {Array<string | number>} array - Array of primitive data types
 * @returns {Array}
 *
 */

let duplicateFree = (array) => {
  let noDupes = [];
  for (let i = 0; i < array.length; i++) {
    if (noDupes.indexOf(array[i]) === -1) noDupes.push(array[i]);
  }
  return noDupes;
};

console.log(duplicateFree([1, 2, 3, 1, 2]));

/**
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 */

let deep = (array) => {
  let flat = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) flat.push(array[i]);
    else {
      flat = [...flat, ...deep(array[i])]; // ES6
      // or flat = flat.concat(deep(array[i])) // ES5
    }
  }
  return flat;
};

console.log(deep([1, 2, [3, 4, [5]]]));
