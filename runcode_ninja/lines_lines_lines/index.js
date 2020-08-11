#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console,
});
let arr = [];
rl.on("line", (line) => {
  if (line.length > 0) {
    arr.push(line);
  }
}).on("close", () => {
  console.log(arr.join(" "));
});
/* 
Description
Your boss handed you a simple task, just replace the "newlines" from files provided files with spaces...

Sample Input
$ cat sample.txt
this is one line
 
this
is also
just one
line
 
maybe we should try something different
 
ha
ha
haha
 
Expected Output
$ ./solve.py sample.txt
this is one line this is also just one line maybe we should try something different ha ha haha
*/