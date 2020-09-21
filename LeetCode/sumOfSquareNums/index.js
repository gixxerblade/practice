// Given a non-negative integer c, your task is to decide whether there're
// two integers a and b such that a2 + b2 = c.

var judgeSquareSum = function (c) {
  if (c === 0 || c === 1) return true;
  for (let a = 0; a < c; a++) {
    for (let b = 0; b < c; b++) {
      console.log(a, b);
      if (a ** 2 + b ** 2 === c) return true;
    }
  }
  return false;
};

// console.log(judgeSquareSum(5));
// console.log(judgeSquareSum(3));
console.log(judgeSquareSum(0));
