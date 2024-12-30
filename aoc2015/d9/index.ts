import { BunFile } from 'bun';
const file = Bun.file('./input.txt');

function parseInput(line: string) {
  const parts = line.split(' = ');
  const [from, to] = parts[0].split(' to ');
  const distance = parseInt(parts[1]);
  return { from, to, distance };
}

async function p1(file: BunFile) {
  const input = await file.text();
  return input.split('\n').map(parseInput);
}

p1(file).then((o) => console.log(o))

async function p2(file: BunFile) {}
