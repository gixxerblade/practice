/**
 * Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
 * @Input
 * 'The quick brown fox'
 * @Output
 * 5
 */

const countVowels = (str: string) => {
  return str.toLowerCase().match(/[aeiou]/gi)?.length || 0
}

const countVowels1 = (str: string) => {
  const vowels = 'aeiou';
  const obj: Record<string, number> = {}
  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      obj[char] = obj[char] + 1 || 1
    }
  }
  return Object.keys(obj).reduce((total, char) => total + obj[char], 0)
}

const countVowels2 = (str: string) => {
  const vowels = 'aeiou';
  let count = 0;
  str.split('').forEach((char) => {
    if (vowels.includes(char)) {
      count++
    }
  })
  return count
}

console.log(countVowels('The quick brown fox'));
console.log(countVowels1('The quick brown fox'));
console.log(countVowels2('The quick brown fox'));
