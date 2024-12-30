import { BunFile } from 'bun';

const file = Bun.file('./input.txt');

async function d1p1(file: BunFile) {
  const input = await file.text();
  let floor = 0;
  const building = input.split('');
  for (const el of building) {
    if (el === '(') {
      floor += 1;
    } else {
      floor -= 1;
    }
  }
  return floor;
}

d1p1(file).then(out => console.log(out));

async function d1p2(file: BunFile) {
  const input = await file.text();
  let floor = 0;
  const building = input.split('');
  for (const [idx, el] of building.entries()) {
    if (el === '(') {
      floor += 1;
    } else {
      floor -= 1;
    }
    if (floor === -1) {
      return idx + 1
    }
  }

}

d1p2(file).then(out => console.log(out))