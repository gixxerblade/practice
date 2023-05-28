/**
 * Given a Fibonacci number, give the previous Fibonacci number.
 * If the number given is not a Fibonacci number, return -1.
 */
const isPerfectSquare = (num: number): boolean => {
  // Perfect square: Floor square root then square number. Are they equal?
  const factor = Math.floor(Math.sqrt(num))
  return factor * factor === num
}

const isFibonacciNumber = (num: number): boolean => {
  // N is a Fibonacci number if and only if ( 5*N2 + 4 ) or ( 5*N2 – 4 ) and is a perfect square
  return isPerfectSquare(5 * Math.pow(num, 2) + 4) || isPerfectSquare(5 * Math.pow(num, 2) - 4)
}

const previousFibonacci = (num: number): number => {
  if (isFibonacciNumber(num)) {
    // Previous === N / ((1 + sqrt(5)) / 2.0) floored
    return Math.round(num / ((1 + Math.sqrt(5)) / 2))
  }
  // Not a Fibbonacci number
  return -1
}

const fibHelper = (n, memo = {}) => {
  if (n in memo) {
    return memo[n]
  }
  if (n == 0) return 0;
  if (n == 1) return 1;
  return memo[n] = fibHelper(n - 1) + fibHelper(n - 2)
}
const fibbonacci = (n: number, res = [0, 1, 1]): number => {
  
};
console.log(fibbonacci(100));

type Fib = {
  fibbonacci: number,
  previousFibbonacci: number,
}

const driver = (num = 0): Fib => {
  const fib = fibbonacci(num)
  return {
    fibbonacci: fib,
    previousFibbonacci: previousFibonacci(fib)
  }
}

interface Result extends Fib {
  step: number
}
// Calculates fibbonacci and previousFibbonacci up to supplied number
const main = (num: number): Result[] => {
  let res: Result[] = [];
  for (let i = 0; i < num; i++) {
    res.push({...driver(i), step: i});
  }
  return res
}

// console.log(main(30))
// test non fibonacci 
console.log(previousFibonacci(9)) // -1
console.log(previousFibonacci(6)) // -1
console.log(previousFibonacci(7)) // -1
console.log(previousFibonacci(2585)) // -1