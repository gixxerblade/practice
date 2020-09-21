// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

var isPerfectSquare = function (num) {
  let root = Math.sqrt(num);
  return root % 1 === 0 ? true : false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
