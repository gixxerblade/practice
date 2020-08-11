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
  let result = arr.map((word) => {
    let res = word.split(" ").map((el) => {
      return (lastLetterRemove = el.slice(0, -1));
    });
    return res.join(" ").toString();
  });
  console.log(result);
});
/* 
 Description
It looks like some sort of data corruption happened and the siburs appended some extra characters to the end of the words. Write a program to fix the extra characters.

Sample Input
$ cat samplefile
WhatZ youH gonnaM doG withC allA thatv junkn?
AllD thatV junko insideQ yours trunkh?
I'ml gonnat getQ, getl, geth, gete, youy drunkt,
GetB youj lovem drunkv offe myu humpJ.
MyA humpc, myO humpP, myZ humpV, mym humpA, myc humpV,
Myu humpz, myA humpU, myw humpw, myW lovelyG littley lumpsl (Checkp itc outZ)
Expected Output
$ ./solve.py /path/to/samplefile
What you gonna do with all that junk?
All that junk inside your trunk?
I'm gonna get, get, get, get, you drunk,
Get you love drunk off my hump.
My hump, my hump, my hump, my hump, my hump,
My hump, my hump, my hump, my lovely little lumps (Check it out)
 */
