#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console
});
rl.on("line", line => {
  let arr = line.split(" ");
  let sum = [];
  let num1 = Number(arr[0]);
  let num2 = Number(arr[1]);
  if (num2 < num1) {
    for (let i = num2; i <= num1; i++) {
      sum.push(i);
    }
    console.log(
      sum.reduce((a, b) => {
        return a + b;
      })
    );
  }

  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      sum.push(i);
    }
    console.log(
      sum.reduce((a, b) => {
        return a + b;
      })
    );
  }
});
