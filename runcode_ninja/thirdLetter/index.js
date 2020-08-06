#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console,
});
let words;
rl.on("line", (line) => {
  words = line.split(" ");
  //console.log(words);
  words.forEach;
  let result = words.map((word) => {
    if (word.length > 2) {
      let wordArr = word.split("");
      let firstLetter = wordArr.shift();
      wordArr.splice(2, 0, firstLetter).join(" ");
      return wordArr.join("");
    }
    if (word.length < 3 && word.length > 1) {
      let wordArr = word.split("");
      let firstLetter = wordArr.shift();
      wordArr.push(firstLetter);
      return wordArr.join("");
    }
    if (word.length === 1) {
      return word[0];
    }
  });
  console.log(result.join(" "));
});
// NOT CORRECT