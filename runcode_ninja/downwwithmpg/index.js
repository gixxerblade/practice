#!/usr/bin/env node
const fs = require("fs");
let filePath = process.argv[2];
const readLine = require("readline");
const rl = readLine.createInterface({
  input: fs.createReadStream(filePath),
  output: console,
});
let total, vehicle;
let row = [];
rl.on("line", (line) => {
  row.push(line);
}).on("close", () => {
  row.shift();
  let sortedVics = row.map((el) => {
    return el.split(",")[3];
  });
  let longest = sortedVics.sort((a, b) => {
    return b.length - a.length;
  })[0];
  let result = row.map((el) => {
    let num = el.split(",");
    total = (num[1] - num[0]) / num[2];
    vehicle = num[3];
    console.log(vehicle.padStart(longest.length), +total.toFixed(2));
  });
});

/* 
Description
Take the given files as input and print the car name and the associate miles per gallon using the information given. Following the given format and note that the longest vehicle name will never exceed the length of Highlander.

Sample Input
miles_start, miles_stop, gallons, car
12042,12340,25,Raptor
39558,39898,16,Highlander

Expected Output
    Raptor 11.92
Highlander 21.25
 */
