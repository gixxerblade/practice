import readline from 'node:readline'
import fs from 'node:fs';

export const getGrid = async (path: string) => {
  const fileStream = fs.createReadStream(path);
  const grid: any[] = [];
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  for await (const line of rl) {
    const l = line.split(' ').map(Number);
    grid.push(l)
  }
  return grid
}
