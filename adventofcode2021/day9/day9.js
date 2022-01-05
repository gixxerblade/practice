const fs = require('fs');

const heights = fs
  .readFileSync('./test.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((line) => line.split('').map(Number));

const part1 = (arr) => {
  let risk = 0;
  const totalRisk = arr.map((line) => {
    const list = line.filter(
      (num, i, ar) => num - ar[i + 1] === 1 || num + 1 === ar[i - 1]
    );
    return list.flatMap((x, i, arr) => {
      let start = x
      let end = start
     while(x - arr[i + 1] === 1){
        
      }
    })
  });
  return totalRisk;
};

console.log(part1(heights));
