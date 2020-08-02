#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console
});
rl.on("line", line => {
  let arr = line
    .split(" ")
    .map(a => {
      return Number(a);
    })
    .reduce((a, b) => {
      return a + b;
    });
  console.log(arr);
});
