const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream('./input.txt'),
  output: console
});

const binaryArrayToNumber = (arr) => {
  return arr.reduce((a, b) => (a << 1 | b), 0);
};

const day3part1 = () => {
  const gamma = [], epsilon = [];
  const zeros = [], ones = []
  rl.on('line', (line) => {
    const array = Array.from(String(line), Number)
    array.forEach((item, i) => {
      if (item === 0) {
        if (zeros[i] === undefined) {
          zeros[i] = 1
        } else {
          zeros[i]++
        }
      }
      if (item === 1) {
        if (ones[i] === undefined) {
          ones[i] = 1
        } else {
          ones[i]++
        }
      }
    })
  })
  rl.on('close', () => {
    zeros.forEach((item, i) => {
      item > ones[i] ? gamma.push(0) : gamma.push(1)
      item < ones[i] ? epsilon.push(0) : epsilon.push(1)
    })
    console.log(binaryArrayToNumber(gamma) * binaryArrayToNumber(epsilon))
  })
}
day3part1()