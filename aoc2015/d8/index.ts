import { BunFile } from 'bun';
const file = Bun.file('./input.txt');

function parseP1(str: string) {
  const codeLength = str.length; // Raw length including quotes

  // Remove quotes and process escape sequences
  const memoryStr = str
    .slice(1, -1) // Remove outer quotes
    .replace(/\\x[0-9a-f]{2}/gi, 'X') // Hex escapes to single char
    .replace(/\\"/g, '"') // Escaped quotes to quotes
    .replace(/\\\\/g, '\\'); // Double backslash to single

  return codeLength - memoryStr.length;
}

async function p1(file: BunFile) {
  const input = await file.text();
  const strLens = input.split('\n').map(parseP1);
  console.log(strLens)
  return strLens.reduce((a, b) => a + b, 0);
}

p1(file).then(o => console.log(o));

function encodeString(str: string) {
  return '"' + str
    .replace(/\\/g, '\\\\')  // Double backslashes first
    .replace(/"/g, '\\"')    // Escape quotes
    + '"';                   // Add surrounding quotes
}

function parseP2(input:string) {
  const encoded = encodeString(input)
  return encoded.length - input.length
}
async function p2(file:BunFile) {
  const input = await file.text();
  return input.split('\n').map(parseP2).reduce((a, b) => a + b, 0)
}
p2(file).then(o=>console.log(o))