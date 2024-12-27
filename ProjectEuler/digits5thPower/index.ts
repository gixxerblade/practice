import { getDigits, recurseFact } from '../utils/utils';

const preCalc5thPower = () => {
  const digits: number[] = [];
  for (let i = 0; i <= 9; i++) {
    digits[i] = Math.pow(i, 5);
  }
  return digits;
};

const main = () => {
  const fifthPowers = preCalc5thPower();
  const upperBound = 6 * Math.pow(9, 5); // 6 * 9^5
  let total = 0;
  for (let i = 2; i <= upperBound; i++) {
    const digits = String(i).split('').map(Number);
    const sumOfPowers = digits.reduce((sum, digit) => sum + fifthPowers[digit], 0);
    if (sumOfPowers === i) {
      console.log('found %s', i);
      total += i;
    }
  }
  return total;
};

// console.log(main())

const preCalcFactorials = () => {
  const factorials: number[] = [];
  for (let i = 0; i <= 9; i++) {
    factorials[i] = recurseFact(i);
  }
  return factorials;
};

const digitFactorial = () => {
  const facts = preCalcFactorials();
  const upperBound = 7 * facts[9];
  let total = 0;
  for (let i = 3; i <= upperBound; i++) {
    const digits = getDigits(i);
    const sumOfFactorials = digits.reduce((sum, digit) => sum + facts[digit], 0);
    if (sumOfFactorials === i) {
      total += i;
    }
  }
  return total;
};

console.log(digitFactorial());
