const fs = require('fs');
const school = fs
  .readFileSync('./input.txt', { encoding: 'utf-8' })
  .split(',')
  .map(Number);
const testFish = [3];
const part1 = (array) => {
  const DAYS = 80;
  const queue = Array(9).fill(0);
  array.forEach((fish) => {
    queue[fish]++;
  });
  for (let i = 0; i < DAYS; i++) {
    const currentFish = queue.shift();
    queue.push(currentFish);
    queue[6] += currentFish;
  }
  return queue.reduce((a, b) => a + b);
};
const part2 = (array) => {
  const DAYS = 256;
  const queue = Array(9).fill(0);
  array.forEach((fish) => {
    queue[fish]++;
  });
  for (let i = 0; i < DAYS; i++) {
    const currentFish = queue.shift();
    queue.push(currentFish);
    queue[6] += currentFish;
  }
  return queue.reduce((a, b) => a + b);
};

console.log(part1(school));
console.log(part2(school));
