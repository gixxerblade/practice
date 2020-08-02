#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console
});
let row = [];
rl.on("line", line => {
  row.push(line);
  console.log(row)
});
rl.on("close", () => {
  row = row
    .join(" ")
    .split(" ")
    .map(e => e.toString().split(""));
  for (let i = 0; i <= row.length - 1; i++) {
    if (i/* row.indexOf(row[i]) */ % 2 != 0) {
      row[i].reverse();
    }
    console.log(row[i].join(""));
  }
});
