/* 
Make a function that compresses a string. If there are any repeating 
characters convert the number of repeats into an integer. example:
aabccccaaa => a2b1c4a3
*/

let letters = "aabccccaaa";

let compressString = (input) => {
  // Regex for repeated letters
  let repeated = /([a-zA-Z])\1*/g;
  // Return an array of letters grouped together
  let matches = input.match(repeated);
  //Map through the array, slice the first letter in each element, get the len, then join them
  return matches
    .map((letter) => `${letter.slice(0, 1)}${letter.length}`)
    .join("");
};
console.log(compressString(letters));

let alternateCompressString = (input) => {
  return input
    .match(/([a-zA-Z])\1*/g)
    .map((letter) => `${letter.slice(0, 1)}${letter.length}`)
    .join("");
};
console.log(alternateCompressString(letters));