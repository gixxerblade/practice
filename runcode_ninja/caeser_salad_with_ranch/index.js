#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console,
});

rl.on("line", (line) => {
let arr = line.split(" ")
console.log(arr);
})
//NOT CORRECT