#!/usr/bin/env node
let fs = require("fs");
let image = process.argv[2];
fs.readFile(image, (err, data) => {
  if (err) throw err;

  // Encode to base64
  let encodedImage = new Buffer.from(data, "binary").toString("base64");

  // Decode from base64
  let decoded = new Buffer.from(encodedImage, "base64").toString("binary");
  let str = decoded.match(/(CWN\{(.*?)\})/)[0];
  console.log(str);
});
