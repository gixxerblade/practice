#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console,
});
let arr, answer;
rl.on("line", (line) => {
  let first = line.charAt(0);
  //console.log(first);
  let arr = line.split(",")
  arr[0] = arr[0].split(" ").pop()
  console.log(arr);
});

/* NOT CORRECT
Description
The path to the input file will be passed into your program as a command line argument when your program is called.

Given a single positive integer and a list of integers, find the integer in the list using the first integer as an index (not 0-indexed) and print the value of the next higher integer (greater than the integer found earlier) in the list. Wrap if necessary. If there are no higher integers, print nothing.

Sample Input
$ cat /path/to/somefile.txt
5 1,4,3,2,5,7
8 4,9,8,3,1,5,9,5,1,2,3,4,3,2,9
1 25,11,99,3,44,55,2,55,55,98
6 3,7,4,4,5,4,3
Expected Output
$ ./i_can_count_to_potato_and_so_can_you_solve.py /path/to/somefile.txt
7
9
99
7
 */
