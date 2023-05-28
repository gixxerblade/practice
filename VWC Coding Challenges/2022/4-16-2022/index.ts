/**
 * Write a JavaScript function to count the number of vowels in a given string.
 * Input
 * console.log(vowel_count('The quick brown fox jumps over the lazy dog'));
 * Output
 * 11
 * 
 */

const vowel_count = (phrase: string) => {
  const vowels = /[aeiou]/g
  return phrase.toLowerCase().match(vowels).length
}
console.log(vowel_count('The quick brown fox jumps over the lazy dog'));