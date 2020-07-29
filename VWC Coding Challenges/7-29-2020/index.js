/**
 * Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.
 */

let divisible = (dividend) => {
  return (divisor) => {
    return divisor % dividend === 0 ? true : false;
  };
};
let modulo100 = divisible(100);

console.log(modulo100(200)); //true
console.log(modulo100(250)); // false
console.log(modulo100(800)); // true