
const getChunks = (input: string[], size: number) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

const letterCombinations = (digits: string): string[] => {
  const phoneLookup = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  const len = digits.length;
  const res = [];
  const backtrack = (str, index) => {
    if (str.length === digits.length) {
      res.push(str)
    } else {
      const chars = phoneLookup[digits[index]]
      for (const char of chars) {
        backtrack(str + char, index + 1)
      }
    }
  }
  backtrack('', 0)
  return res
}
const n = '23'
console.log(letterCombinations(n));
console.log(letterCombinations('2'));
