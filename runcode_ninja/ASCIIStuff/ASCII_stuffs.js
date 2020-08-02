#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath)
});
rl.on("line", line => {
  let hexStr = line
    .split("")
    .filter(i => {
      return /\S/.test(i);
    })
    .join("");
  let str = "";
  for (var i = 0; i < hexStr.length; i += 2) {
    str += String.fromCharCode(parseInt(hexStr.substr(i, 2), 16));
  }
  console.log(str);
});
