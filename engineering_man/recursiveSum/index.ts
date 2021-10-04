// Given a whole number, print it’s recursive sum.

/**
 * @input value1 1919
 * @output 2
 */

const value1 = 1919;
const recursiveSum = (num) => {
  const arr = num.toString().split('');
  while (arr.length > 1) {
    arr.reduce((total, curr) => total + parseInt(curr), 0);
  }
  return arr
};
console.log(recursiveSum(value1));
