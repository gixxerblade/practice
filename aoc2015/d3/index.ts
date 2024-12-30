import { BunFile } from 'bun';

const file = Bun.file('./input.txt');

function getNextPosition(direction: string, x: number, y: number) {
  switch (direction) {
    case '^':
      y++;
      break;
    case 'v':
      y--;
      break;
    case '>':
      x++;
      break;
    case '<':
      x--;
      break;
  }
  return { x, y };
}

async function p1(file: BunFile) {
  const input = await file.text();
  const visited = new Set();
  const directions = input.split('');
  let x = 0,
    y = 0;
  for (const direction of directions) {
    ({ x, y } = getNextPosition(direction, x, y));
    visited.add(`${x}${y}`);
  }
  return visited.size;
}

p1(file).then(out => console.log(out));

async function p2(file: BunFile) {
  const input = await file.text();
  const directions = input.split('');
  const visited = new Set(['0,0']);
  let santaX = 0,
    santaY = 0;
  let roboX = 0,
    roboY = 0;

  for (let i = 0; i < directions.length; i++) {
    if (i % 2 === 0) {
      ({ x: santaX, y: santaY } = getNextPosition(directions[i], santaX, santaY));
      visited.add(`${santaX},${santaY}`);
    } else {
      ({ x: roboX, y: roboY } = getNextPosition(directions[i], roboX, roboY));
      visited.add(`${roboX},${roboY}`);
    }
  }
  return visited.size;
}
p2(file).then(out => console.log(out));
