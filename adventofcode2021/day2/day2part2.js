const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream('./input.txt'),
  output: console
});

const calcPos = () => {
  let height = 0, depth = 0, aim = 0
  rl.on('line', (line) => {
    if (line.includes('forward')) {
      const output = line.replace(/forward\s/g, '')
      height += parseInt(output)
      depth += (aim * parseInt(output))
    }
    if (line.includes('down')) {
      const output = line.replace(/down\s/g, '')
      aim += parseInt(output)
    }
    if (line.includes('up')) {
      const output = line.replace(/up\s/g, '')
      aim -= parseInt(output)
    }
  })
  rl.on('close', () => {
    console.log(height * depth)
  })
}

console.log(calcPos())

