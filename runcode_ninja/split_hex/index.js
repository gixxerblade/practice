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
  arr.push(line);
}).on("close", () => {
  let result = arr.map((el, idx, arr) => {
    let res = [];
    for (let i = 0; i < arr[0].length; i++) {
      res.push(arr[0][i], arr[1][i]);
    }
    return res;
  });
  let hex = result[0]
    .join("")
    .match(/.{1,2}/g)
    .join(" ");
  result = hex
    .split(" ")
    .map((el) => {
      return String.fromCharCode(parseInt(el, 16));
    })
    .join("");
  console.log(result);
});
/* COMPLETE!!
Description
It appears this guy wrote a broken hex generator, instead of printing the hex representation as
 normal it's split on two lines. Can you stick the lines together and decode the hex?

Sample Input
$ cat /path/to/input.txt
46627672666666276672667766630
31e09f50453f45048930d533175fa

Expected Output
$ ./split.pl /path/to/input.txt
Can you decode this message?
 */
