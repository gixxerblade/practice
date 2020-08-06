#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console,
});
rl.on("line", (line) => {
  let arr = line.split(" ").map(Number);
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  product = Math.round(product * 100) / 100;
  console.log(product);
});
