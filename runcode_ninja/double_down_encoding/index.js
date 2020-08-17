#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console,
});
rl.on("line", (line) => {
  let hex = line.match(/.{1,2}/g).join(" ");
  let result = hex.split(" ").map((el) => {
    let dec = parseInt(el, 16)/2
    return  String.fromCharCode(parseInt(dec.toString(16), 16))
  }).join("");
  console.log(result);
});
/* 
COMPLETE!!
Description
Just decode the message.

Sample Input
$ cat /path/to/somefile.txt
a6cac6e4cae8409acae6e6c2ceca
Expected Output
$ ./double_down_encoding_solve.py /path/to/somefile.txt
Secret Message
*/