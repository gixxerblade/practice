/**
 * 
 * Numerals must be arranged in descending order of size
 * M, C, and X cannot be equalled or exceeded by smaller denominations
 * D, L, and V can each only appear once
 */
type Roman = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';
const isRoman = (letter: string): letter is Roman => {
  return letter as Roman !== undefined
}

const romanNumerConverter = (s: string): number | string => {
  let regex = new RegExp(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/);
  const isValidRomanNumeral = regex.test(s) && s.split('').every((l) => isRoman(l));
  const romanMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let result = 0;
  s.split('').forEach((char, idx, self) => {
    if (romanMap[char] > romanMap[self[idx + 1]]) {
      result += romanMap[char]
    } else if (romanMap[char] < romanMap[self[idx + 1]]) {
      result -= romanMap[char];
    } else {
      result += romanMap[char];
    }
  });
  return isValidRomanNumeral ? result : 'Not a valid Roman numeral';
}

console.log(romanNumerConverter('XXVI'))
console.log(romanNumerConverter('CI'))