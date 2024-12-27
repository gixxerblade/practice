const factorialBigInt = (n: number): bigint => {
  let result = BigInt(1);
  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }
  return result;
};

const factorialDigitSum = () => {
  const oneHundredFactorial = factorialBigInt(100);
  return oneHundredFactorial.toString().split('').map(Number).reduce((a, b) => a + b, );
};
console.log(factorialDigitSum());
