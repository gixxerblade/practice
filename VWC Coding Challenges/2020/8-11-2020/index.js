/* 
Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (num) => {
  nineteen(num);

  rl.close();
});

let nineteen = (num) => {
  if (isNaN(num)) {
    return `${num} is not a number`;
  }
  if (Math.abs(num - 19) > 19) {
    return Math.abs(num - 19) * 3;
  }
  return Math.abs(num - 19);
};

console.log(nineteen(19));
console.log(nineteen("lol"));
