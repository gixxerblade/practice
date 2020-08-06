#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console,
});
let arr, answer;
rl.on("line", (line) => {
  arr = line.split(" ").map(Number);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let result = arr.every((el, i, array) => {
    if (el === array[0]) {
      return true;
    } else return false;
  });
  if (result) {
    answer = arr.reduce(reducer) * 4;
  }
  if (!result) answer = arr.reduce(reducer);
  if (answer === 0) console.log(0);
  else if (answer < 99 && answer > 0)
    console.log(parseFloat(answer).toPrecision(2));
  else if (answer > 99 || answer < 1) console.log(answer);
});
