#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const { log } = require("console");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console,
});
let arr = [];
let largest;
rl.on("line", (line) => {
  arr.push(line);
  largest = arr.sort((a, b) => b - a);
}).on("close", () => {
  console.log(largest[0]);
});
/* 
Description
Read the contents of a text file, and find the largest number.

Sample Input
$ cat /path/to/file
-0.1
1
-5
2
3
-11.999999
1000
4
0.3
100
-100

Expected Output
$ ./largest.go /path/to/file
1000
*/
