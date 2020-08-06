#!/usr/bin/env node
let fs = require("fs");
let filePath = process.argv[2];

try {
  let data = fs.readFileSync(filePath, "utf-8");
  let str = data.match(/(RCN\{(.*?)\})/);
  console.log(str[0]);
} catch (e) {
  console.log("Error", e.stack);
}
/* 
You know what to do. Find the flag. Download the binary here.

Sample Input
$ ./solution.sh /path/to/file
Expected Output
$./solution.sh /path/to/file
RCN{Whoah_impressive_reversing!}
*/