#!/usr/bin/env node
let server = process.argv[2];
let port = process.argv[3];
const net = require("net");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, console);
let client = new net.Socket();

client.setEncoding("utf8");

client.connect(port, server, () => {});
client.on("data", (data) => {
  rl.on("line", (line) => {
    client.write(`${line}\r\n`);
  });
});
rl.on("close", () => {
  client.end();
});


/* client.end();
client.on("close", () => {
  //client.destroy(); // kill client after server's response
  //console.log("Connection closed");
});*/
// FUCK THIS THING...