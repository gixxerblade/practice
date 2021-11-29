#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console
});
rl.on("line", line => {
  const regex = /\(|\)|\s/g
  const [red, green, blue] = line.replace(regex, '').split(',')
  if(Math.max(red, green, blue) === parseInt(red)) {console.log('RED')}
  if(Math.max(red, green, blue) === parseInt(green)) console.log('GREEN')
  if(Math.max(red, green, blue) === parseInt(blue)) console.log('BLUE')
})