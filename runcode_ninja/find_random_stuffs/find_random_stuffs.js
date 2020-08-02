#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath)
});
rl.on("line", line => {
  let arr = line.split(" ");
  let arg1 = parseInt(arr[0]);
  let arg2 = parseInt(arr[1]);
  let result = [];
  for (let i = arg1; i <= arg2; i++) {
    if (i % 7 == 0 && i % 5 != 0) {
      result.push(i);
    }
  }
  console.log(result.toString());
});
