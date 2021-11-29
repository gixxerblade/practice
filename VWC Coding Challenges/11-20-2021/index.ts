/**
 * Write a JavaScript function to count the number of vowels in a given string.
 * @Input
 * console.log(vowel_count('The quick brown fox jumps over the lazy dog'));
 * @Output
 * 11
 */

const stringWithVowels = 'The quick brown fox jumps over the lazy dog'
const stringWithNoVowels = 'sty shy. By sty, gym shy? Wry my lynx: my lynx fly. Gypsy skry hymn cry lynx-fly myth!'
const mattis = 'Be polite, be professional, but have a plan to kill everybody you meet.'

const vowelCount = (str: string) => {
  const notVowels = /[^aeiou]/g
  return str
    .toLowerCase()
    .replace(notVowels, '')
    .length
}

console.log(vowelCount(stringWithVowels))
console.log(vowelCount(stringWithNoVowels))
console.log(vowelCount(mattis))