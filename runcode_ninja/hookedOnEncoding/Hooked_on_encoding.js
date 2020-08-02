#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console
});
let phoToEng =(word)=>{
const words = {
  a: "alfa",
  b: "bravo",
  c: "charlie",
  d: "delta",
  e: "echo",
  f: "foxtrot",
  g: "golf",
  h: "hotel",
  i: "india",
  j: "juliett",
  k: "kilo",
  l: "lima",
  m: "mike",
  n: "november",
  o: "oscar",
  p: "papa",
  q: "quebec",
  r: "romeo",
  s: "sierra",
  t: "tango",
  u: "uniform",
  v: "victor",
  w: "whiskey",
  x: "x-ray",
  y: "yankee",
  z: "zulu"
};
return words[word] || 'not found'
}
rl.on("line", line => {
  let sentence;
  let arr = line
    .toLowerCase()
    .split(" ")
    .map(e => e.split("-"));
  //console.log(arr.map(e=>phoToEng(e)));
});
console.log(phoToEng('i a s'))