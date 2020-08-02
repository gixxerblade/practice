#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console
});
let re = /^0[0-7]*$/;
let text = "";
rl.on("line", line => {
  let str = line.split(" ").map(e => {
    if (e.includes("0x")) {
      return e;
    } else if (e.match(/^0[1-7][0-7]*$/)) {
      return parseInt(e, 8);
    } else if (e.includes("0b")) {
      return Number(e);
    } else return parseInt(e);
  });
  console.log(
    str
      .map(e => {
        String.fromCodePoint(e);
        return String.fromCharCode(e);
      })
      .join("")
  );
});
