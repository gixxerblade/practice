#!/usr/bin/env node
let exec = require("child_process").exec,
  child;
let filePath = process.argv[2];

child = exec(filePath, (error, stdout, stderr) => {
  console.log("stdout:", stdout);
  console.log("stderr:", stderr);
  if (error !== null) {
    console.log("exec error:", error);
  }
});

/* 
Description
This binary will print a flag. You should try making it print a flag.

Competition FirstBlood: @chashtag

Sample Input
$ ./path/to/your/solve.php /path/to/splode.bin

Expected Output
$ ./path/to/your/solve.php /path/to/splode.bin
RCN{whatever_is_in_your_flag_dot_txt}
*/
