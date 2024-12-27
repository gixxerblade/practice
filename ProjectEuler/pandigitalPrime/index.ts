import { getFactors, getPermutations, isPrime } from '../utils/utils';

function solve() {
  const panDigitals = getPermutations(1234567).sort((a, b) => b - a);
  for (const num of panDigitals) {
    if (isPrime(num)) {
      return num
    }
  }
  return 0;
}

console.log(solve());
