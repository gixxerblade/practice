import { BunFile } from 'bun';

const file = Bun.file('./input.txt');

// 2*l*w + 2*w*h + 2*h*l
async function p1(file: BunFile) {
  const input = await file.text();
  const dimensions = input
    .split('\n')
    .map(line => {
      const [l, w, h] = line.split('x').map(Number);
      const [smallest, middle, largest] = line
        .split('x')
        .map(Number)
        .sort((a, b) => a - b);
      console.log({ smallest, middle, largest });
      const length = 2 * l * w;
      const width = 2 * w * h;
      const height = 2 * h * l;
      return length + width + height + smallest * middle;
    })
    .reduce((a, b) => a + b, 0);
  return dimensions;
}

p1(file).then(out => console.log(out));

async function p2(file: BunFile) {
  const input = await file.text();
  const dimensions = input
    .split('\n')
    .map(line => {
      const [l, w, h] = line.split('x').map(Number);
      const [smallest, middle, largest] = line
        .split('x')
        .map(Number)
        .sort((a, b) => a - b);
      return 2 * smallest + 2 * middle + l * w * h
    })
    .reduce((a, b) => a + b, 0);
  return dimensions;
}

p2(file).then(out=> console.log(out))