#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console
});
const count = {
  Integer: 0,
  Float: 0,
  String: 0,
}
rl.on("line", line => {
  if (line % 1 === 0) {
    count.Integer += 1
  } else if (isNaN(line)) {
    count.String += 1
  } else count.Float += 1
})
rl.on("close", () => {
  console.log(Object.keys(count).map(value=> {
    return `${value}: ${count[value]}`
  }).join('\n'))
})