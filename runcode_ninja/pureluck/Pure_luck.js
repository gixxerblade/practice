#!/usr/bin/env node
/* 
Connect to the server and guess the lucky number to get a flag!
Test server located at listen.runcode.ninja:9009
The lucky number is 11
*/
let server = process.argv[2];
let port = process.argv[3];
var net = require("net");
var client = new net.Socket();
client.connect(port, server, function() {
  //console.log("Connected");
  client.write(11);
});

client.on("data", function(data) {
  console.log(data.toString());
  client.destroy(); // kill client after server's response
});

client.on("close", function() {
  //console.log("Connection closed");
});
