#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console,
});
rl.on("line", (line) => {
  let bin = line.match(/.{1,8}/g).join(" ");
  let result = bin
    .split(" ")
    .map((el) => {
      return String.fromCharCode(parseInt(el, 2));
    })
    .join("");
  console.log(result);
});

/* 
COMPLETE!!
Description
The path to the input file will be passed into your program as a command line argument when your program is called.

We seem to have found a file or two with encoded content. Figure out the encoding scheme and decode the ciphertext.

bb_cipher0.txt

Sample Input
$  ./break_big_bytes.py bb_cipher0.txt
Expected Output
$  ./break_big_bytes.py bb_cipher0.txt
This should not be hard at all!
 */
