#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console
});
let result = 0;
rl.on("line", line => {
  let arr = line.split(" ").filter(el => {
    return el.length && el == +el;
  });
  if (arr.length !== 0) {
    if (arr[1] !== undefined) {
      result = arr
        .map(x => Number(x))
        .reduce((a, b) => {
          return a + b;
        });
      console.log(result.toFixed(6) * 1);
    }
  }
});
