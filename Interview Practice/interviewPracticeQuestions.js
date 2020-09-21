/* Q1 Being told that an unsorted array contains (n - 1) of n consecutive numbers
 (where the bounds are defined), find the missing number in O(n) time */

let array1 = [2, 5, 1, 4, 9, 6, 3, 7];
let upperBound = 9;
let lowerBound = 1;

/* Q2 Remove duplicates of an array and return an array of only unique 
elements
 */
let array2 = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

/* Q3 Given a string, reverse each word in the sentence*/

let string3 = "The brown fox jumped over the lazy dog";

/* Q4:   Implement enqueue and dequeue using only two stacksImplement enqueue 
and dequeue using only two stacks */

/* Q5:   Write a "mul" function which will properly when invoked as below syntax.*/

console.log(mul(2)(3)(4)); // output : 24

/* Q6: How to empty an array in JavaScript?*/
let array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // empty this

/* Q7:   How to check if an object is an array or not? Provide some code. */

let array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* Q8:   How would you use a closure to create a private counter? */

/* Q9:   Write a function that would allow you to do this. */

let addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

/* Q10:   How would you check if a number is an integer? */

let number = 10;
let float = 1.456;

/* Q11:   Explain what a callback function is and provide a simple example. */

/* Q12:   FizzBuzz Challenge Create a for loop that iterates up to 100 while outputting 
"fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5. */

//fizzBuzz(100);

/* Q13:   Make this work
duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5] */

/**Q13 Find the nth number in a fibonacci sequence */

/*Q14  Write a function to perform a factorial on a number */

/** Q15
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 * @param {number} arraySize - size of array
 * @param {?} value - value to fill
 * @returns {Array}
 */

console.log(fillArray(3, "a"));

/** Q16
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */

/** Q17
 * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
 * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - An array of any elements
 * @returns {Array}
 *
 * All items are known as falsy. A Boolean check will remove falsy items
 */

/** Q18
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 * @param {Array} array - Array of primitive data types
 * @param {?} args list of values to remove
 * @returns {Array}
 */

/** Q19
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 * Task Complexity: 2 of 5
 * @param {Array<string | number>} array - Array of primitive data types
 * @returns {Array}
 *
 */

/** Q20
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 */

/** Q21
 * Task: Compute the average of a list of any number of arguments
 * Expected result: 1,2,3,4,5 => 3
 * @params {Number} number
 * @return {Number}
 */

/** Q22
 * Write a simple function (less than 80 characters) that
 * returns a boolean indicating whether or not a string is a palindrome.
 * A palindrome is a string that is spelled the same forwards and
 * backwards.
 */

/* Q23 Question: What is the value of foo? */

var foo = 10 + "20";

/* Q24 Question: What will be the output of the code below? */

console.log(0.1 + 0.2 == 0.3);

/* Q25 Question: What value is returned from the following statement? */

"i'm a lasagna hog".split("").reverse().join("");

/*Q26 Question: What is the value of window.foo? */

window.foo || (window.foo = "bar");

/* Q27 Question: What is the outcome of the two alerts below? */

var foo = "Hello";
(function () {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);

/* Q28 Question: What is the value of foo.length? */
var foo = [];
foo.push(1);
foo.push(2);

/* Q29 Question: What is the value of foo.x?*/

var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };

/* Q30 Question: What does the following code print? */

console.log("one");
setTimeout(function () {
  console.log("two");
}, 0);
Promise.resolve().then(function () {
  console.log("three");
});
console.log("four");
