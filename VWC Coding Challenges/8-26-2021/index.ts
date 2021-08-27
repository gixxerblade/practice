const factorial = (num: number) => {
  const iterate = (i: number, fact: number) => {
    if (i === 0) {
      return fact;
    } else {
      return iterate(i - 1, i * fact);
    }
  };
  return iterate(num, 1);
};

console.log(factorial(1))
console.log(factorial(5))
console.log(factorial(7))
console.log(factorial(17))
