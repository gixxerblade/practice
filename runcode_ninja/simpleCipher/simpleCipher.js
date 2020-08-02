#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console
});
let re = /^([A-Z][a-z]+)+$/;
let text = "";
rl.on("line", line => {
  let arr = line
    .split(" ")
    .filter(e => {
      return e.match(re);
    })
    .join(" ");
  console.log(arr);
});
