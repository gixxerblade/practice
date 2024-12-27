import { getProperDivisors } from '../utils/utils';

type Obj = {
  num: number,
  isAbundant: boolean,
}

const getAbundantNums = (limit: number) => {
  const abundantNumbers: number[] = [];
  for (let i = 0; i <= limit; i++) {
    const properDivisors = getProperDivisors(i);
    const sum = properDivisors.reduce((a, b) => a + b, 0);
    sum > i && abundantNumbers.push(i);
  }
  return abundantNumbers
}


function sumOfNonAbundantSums(limit: number): number {
  const abundantNumbers = getAbundantNums(limit);
  const canBeWrittenAsAbundant = new Array(limit + 1).fill(false);

  for (let i = 0; i < abundantNumbers.length; i++) {
    for (let j = i; j < abundantNumbers.length; j++) {
      if (abundantNumbers[i] + abundantNumbers[j] <= limit) {
        canBeWrittenAsAbundant[abundantNumbers[i] + abundantNumbers[j]] = true;
      } else {
        break;
      }
    }
  }

  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    if (!canBeWrittenAsAbundant[i]) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumOfNonAbundantSums(28123));