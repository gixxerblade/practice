#!/usr/bin/env node
let strip = number => {
  return parseFloat(number).toPrecision(3);
};
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath)
});
rl.on("line", line => {
  let arr = line.split(" ");
  let arg1 = arr[0];
  let arg2 = arr[1];
  let result = 0;
  for (let i = 1; i <= arg2; i++) {
    result = i % arg1;
    if (i % arg1 == 0 || strip(result) == arg1) {
      console.log(i);
    }
  }
  console.log("\r");
});
