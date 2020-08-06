#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console,
});
let nice = 0,
  bad = 0;
rl.on("line", (line) => {
  if (line.includes("bad") || line.includes("naughty")) {
    bad++;
    console.log(line);
  }
  if (line.includes("good") || line.includes("nice")) {
    nice++;
    console.log(line);
  }
}).on("close", () => {
  console.log(`Naughty list has ${bad} people!`);
  console.log(`Nice list has ${nice} people!`);
});
/* 
Description
Santa has asked if you can help him parse his list naughty or nice list of people for his upcoming christmas delivery. It looks as though the elves that were writing down the names of those naughty or nice didn't keep the same format. Can you give santa a total count of how many nice and how many naughty people are on his list?
 */
// NOT CORRECT