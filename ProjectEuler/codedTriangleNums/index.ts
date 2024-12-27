import { BunFile } from 'bun';

const file = Bun.file('./0042_words.txt');
async function solve(file: BunFile) {
  const input = await file.text();
  const words = input.split(',').map(word => {
    return word.replaceAll('"', '');
  });
  let total = 0;
  for (const word of words) {
    const convertedTotal = word
      .split('')
      .map(letter => letter.charCodeAt(0) - 64)
      .reduce((a, b) => a + b, 0);
    if (isTriangleNum(convertedTotal)) {
      total = total + 1;
    }
  }
  return total;
}
function isTriangleNum(num: number) {
  const discriminant = 1 + 8 * num;
  const sqrtDiscriminant = Math.sqrt(discriminant);
  return sqrtDiscriminant === Math.floor(sqrtDiscriminant) && (sqrtDiscriminant - 1) % 2 === 0;
}


(async () => {
  const result = await solve(file);
  console.log('Total Triangle Words:', result);
})();
