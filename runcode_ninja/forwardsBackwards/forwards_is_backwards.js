#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath)
});
rl.on("line", line => {
  let word = line;
  let palindrome = word
    .split("") //split word into an array
    .reverse() //reverse the array
    .join(""); //join them back together again as a string
  let test = word == palindrome ? "True" : "False"; //ternary operator to test equality
  console.log(test);
});
