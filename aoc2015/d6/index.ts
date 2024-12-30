import { BunFile } from 'bun';
const file = Bun.file('./input.txt');

const parseInstructions = async (file: BunFile) => {
  const input = await file.text();
  const instructions = input.split('\n').map(line => {
    const regex = /(turn off|turn on|toggle) (\d+),(\d+) through (\d+),(\d+)/;
    const [_, action, x1, y1, x2, y2] = line.match(regex)!;

    return {
      op: action === 'turn on' ? 'on' : action === 'turn off' ? 'off' : 'toggle',
      startX: parseInt(x1),
      startY: parseInt(y1),
      endX: parseInt(x2),
      endY: parseInt(y2),
    };
  });
  return instructions;
};

async function p1(file: BunFile) {
  const instructions = await parseInstructions(file);
  const grid = Array(1000)
    .fill(null)
    .map(() => Array(1000).fill(false));
  for (const inst of instructions) {
    for (let x = inst.startX; x <= inst.endX; x++) {
      for (let y = inst.startY; y <= inst.endY; y++) {
        switch (inst.op) {
          case 'on':
            grid[x][y] = true;
            break;
          case 'off':
            grid[x][y] = false;
            break;
          case 'toggle':
            grid[x][y] = !grid[x][y];
            break;
        }
      }
    }
  }

  return grid.reduce((sum, row) => sum + row.filter(Boolean).length, 0);
}

p1(file).then(o => console.log(o));

async function p2(file: BunFile) {
  const instructions = await parseInstructions(file);
  const grid = Array(1000)
    .fill(null)
    .map(() => Array(1000).fill(0));
    // console.log(JSON.stringify(grid, null, 2))
  for (const inst of instructions) {
    for (let x = inst.startX; x <= inst.endX; x++) {
      for (let y = inst.startY; y <= inst.endY; y++) {
        switch (inst.op) {
          case 'on':
            grid[x][y] += 1;
            break;
          case 'off':
            grid[x][y] = Math.max(0, grid[x][y] - 1);
            break;
          case 'toggle':
            grid[x][y] += 2;
            break;
        }
      }
    }
  }

  return grid.flat().reduce((a, b) => a + b, 0);
}

p2(file).then(o => console.log(o));
