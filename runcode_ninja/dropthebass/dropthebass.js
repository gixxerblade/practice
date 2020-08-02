#!/usr/bin/env node
const fs = require("fs");
let url = process.argv[2];
const https = require("https");
let filePath = "./data.txt";
const readLine = require("readline");
let decode;
const file = fs.createWriteStream("data.txt");

https.get(url, response => {
  var stream = response.pipe(file);

  stream.on("finish", function() {
    const rl = readLine.createInterface({
      input: fs.createReadStream(filePath),
      output: console
    });
    rl.on("line", line => {
      let result = 0;
      let length = 0;
      console.log(typeof line);
      if (line.length > 114) length = 1.5;
      else length = 1 / 3;
      for (let i = 0; i <= line.length * length; i++) {
        let temp = Buffer.from(line, "base64").toString("utf-8");
        line = temp;
        result = temp;
      }
      console.log(result);
    });
  });
});
