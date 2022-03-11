const testCases = [12, 4, 48, 192, 11520, 46080, 552960, 2211840, 28350, 113400, 1360800]
const factorFun = (num) => {
  let i = 1;
  let factors = [];
  while (i <= Math.floor(Math.sqrt(num))) {
    if (num % i === 0) {factors.push(num / i, i);}
    i++;
  }
  return [...new Set(factors)].reduce((a, b) => a + b, 0);
};
testCases.forEach((num) => console.log(factorFun(num)))

