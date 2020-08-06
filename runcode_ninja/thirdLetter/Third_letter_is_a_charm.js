#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console
});
let wordArr;
rl.on("line", line => {
  let arr = line.split(" ").map(e => e.split(""));
  arr.map(e => {
    e.splice(3, 0, e[0]);
    e.shift();
  });
  const wordArr = arr.map(e => e.join(""))
  console.log(wordArr.toString(' ').replace(/,/g, " "))
});
/* 
Description
These sentences have some issues with the words. Looks like a letter has been misplaced in each word (yeah, it's the same one everytime). Write a program to put the words back together the correct way.

Sample Input
$ cat /path/to/somefile.txt
eElctricity! nCostitution! iPhladelphia!
sFih! nPoy! pHi, pHi pHo, pHi pHo oannymous? rDan uyo! uYo vgae mhi eth seay eons.

Expected Output
$ ./third_letter_is_a_charm_solve.py /path/to/somefile.txt
Electricity! Constitution! Philadelphia!
Fish! Pony! Hip, Hip Hop, Hip Hop anonymous? Darn you! You gave him the easy ones.
 */