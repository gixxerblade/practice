#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console
});
let wordArr;
rl.on("line", line => {
  let arr = line.split(" ").map(e => e.split(""));
  arr.map(e => {
    e.splice(3, 0, e[0]);
    e.shift();
  });
  const wordArr = arr.map(e => e.join(""))
  console.log(wordArr.toString(' ').replace(/,/g, " "))
});
