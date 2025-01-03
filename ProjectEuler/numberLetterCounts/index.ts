// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

const numbers = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'thousand',
};
const arr: string[] = [];

for (let i = 1; i <= 1000; i++) {
  let num = '';
  if (i === 1000) {
    num += `${numbers[1]}${numbers[1000]}`;
  } else if (i >= 100) {
    const hundreds = Math.floor(i / 100);
    const remainder = i % 100;
    num += `${numbers[hundreds]}${numbers[100]}`;
    if (remainder > 0) {
      num += 'and';
      if (remainder <= 20) {
        num += numbers[remainder];
      } else {
        const tens = Math.floor(remainder / 10) * 10;
        const units = remainder % 10;
        num += `${numbers[tens]}${units ? numbers[units] : ''}`;
      }
    }
  } else if (i > 20) {
    const tens = Math.floor(i / 10) * 10;
    const units = i % 10;
    num += `${numbers[tens]}${units ? numbers[units] : ''}`;
  } else {
    num += numbers[i];
  }
  arr.push(num);
}
console.log(arr.reduce((total, words) => total + words.length));
