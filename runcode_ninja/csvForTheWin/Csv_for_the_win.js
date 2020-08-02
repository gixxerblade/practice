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
  console.log(line);
  row = row + line + "\n";
  row =
    row
      .split("\n")
      .filter(e => e !== "")
      .join("")
      .split(",")
      .map(Number)
      .reduce((x, y) => x + y)
      .toFixed(5) * 1;
});
rl.on("close", () => {
  console.log(row);
});
