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
    .map(e => {
      parseInt(e);
      e.toString(16);
      return String.fromCharCode(e);
    })
    .join("");
  console.log(arr);
});
