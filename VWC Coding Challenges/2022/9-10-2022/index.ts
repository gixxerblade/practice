/**
 * Write a JavaScript function to count the number of vowels in a given string.
 * Input
 * console.log(vowel_count('The quick brown fox jumps over the lazy dog'));
 * Output
 * 11
 */

const vowel_count = (str: string) => {
  let count = 0;
  str.split('')
    .filter((letter) => !letter.includes(' '))
    .forEach((letter) => 'aeiou'.indexOf(letter.toLowerCase()) > -1 && count++)
  return count
}
console.log(vowel_count('The quick brown fox jumps over the lazy dog')); // 11
