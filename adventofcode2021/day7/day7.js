const fs = require('fs');

const crabs = fs
  .readFileSync('./input.txt', { encoding: 'utf-8' })
  .split(',')
  .map(Number);

// find target to minimize the sum of distance to median
// To find minimu find derivative === 0
const part1 = (crabs) => {
  //sort array
  crabs.sort((a, b) => a - b);
  // find median
  const median = crabs[crabs.length / 2];
  let total = 0;
  crabs.forEach((crab) => {
    // Absolute value to get to the median totaled
    total += Math.abs(crab - median);
  });
  return total;
};

const part2 = (crabs) => {
  // sort
  crabs.sort((a, b) => a - b);
  let cost = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < crabs.length; i++) {
    let distance = 0;
    let score = 0;
    crabs.forEach((crab) => {
      distance = Math.abs(crab - i);
      // compute sum of n positive integers [1+2+3+4..+n]
      // https://www.cuemath.com/sum-of-integers-formula/
      score += distance * (distance + 1) / 2;
    });
    if (score < cost) {
      cost = score;
    }
  }
  return cost;
};
console.log(part1(crabs));
console.log(part2(crabs));
