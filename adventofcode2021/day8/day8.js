const fs = require('fs');

const signals = fs
  .readFileSync('./input.txt', { encoding: 'utf-8' })
  .split('\n');

const part1 = (signal) => {
  const output = signal.map((line) => {
    const [_, output] = line.split(' | ');
    return output.split(' ');
  });
  let countHighlighted = 0;
  // Counting only digits (length?) in the output values (the part after | on each line)
  // For now, focus on the easy digits - digits that are emphasized
  // First two lines output:
  // [fdgacbe] cefdb cefbgd [gcbe] - bracketed items emphasized
  // fcgedb [cgb] [dgebacf] [gc] - bracketed items emphasized
  const highlightedLengths = [2, 3, 4, 7];
  output.forEach((line) => {
    line.forEach((code) => {
      if (highlightedLengths.includes(code.length)) {
        countHighlighted++;
      }
    });
  });
  return countHighlighted;
};

const convertToNumber = (arr) => {
  return parseInt(arr.join('').split(' ').map(Number).join(''));
};

const includes = (a, b) => {
  const set = new Set([...a]);
  return [...b].every((x) => set.has(x));
};

const part2 = (signal) => {
  let total = 0;
  const processed = signal.map((line) => {
    const [input, output] = line
      .split(' | ')
      .map((item) => item.split(' ').map((str) => [...str].sort().join('')));
    return { input, output };
  });
  // console.log(processed);
  processed.forEach((values, i) => {
    const dictionary = {};
    // 1 => len = 2 found by length
    // 7 => len = 3 found by length
    // 4 => len = 4 found by length
    // 8 => len = 7 found by length
    // 2 => len = 5 !include 1,
    // 3 => len = 5 include 1
    // 5 => len = 5
    // 0 => len = 6 !include 4
    // 6 => len = 6 !include 1
    // 9 => len = 6 include 4, include 7

    dictionary[1] = values.input.find((item) => item.length === 2);
    dictionary[4] = values.input.find((item) => item.length === 4);
    dictionary[7] = values.input.find((item) => item.length === 3);
    dictionary[8] = values.input.find((item) => item.length === 7);
    dictionary[6] = values.input.find(
      (item) => item.length === 6 && !includes(item, dictionary[1])
    );
    dictionary[9] = values.input.find(
      (item) =>
        item.length === 6 &&
        includes(item, dictionary[4]) &&
        item !== dictionary[6]
    );
    dictionary[0] = values.input.find(
      (item) =>
        item.length === 6 && item !== dictionary[6] && item !== dictionary[9]
    );
    dictionary[3] = values.input.find(
      (item) => item.length === 5 && includes(item, dictionary[1])
    );
    dictionary[5] = values.input.find(
      (item) =>
        item.length === 5 &&
        item !== dictionary[3] &&
        includes(dictionary[6], item)
    );
    dictionary[2] = values.input.find(
      (item) =>
        item.length === 5 && item !== dictionary[5] && item !== dictionary[3]
    );
    const translationTable = Object.fromEntries(
      Object.entries(dictionary).map((item) => item.reverse())
    );
    const translate = values.output.map((item) => translationTable[item]);
    console.log(dictionary, translate)
    const num = convertToNumber(translate);
    total += num;
  });
  return total;
};

console.log(part1(signals));
console.log(part2(signals));
