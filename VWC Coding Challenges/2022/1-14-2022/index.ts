/**
 * Write a JavaScript function that accepts a string as a parameter and converts the
 * first letter of each word of the string in upper case.
 * Input
 * 'the quick brown fox'
 * Output
 * 'The Quick Brown Fox'
 */

const titleCase = (str: string): string => {
  return str
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.substring(1)
    })
    .join(' ')
}

console.log(titleCase('the quick brown fox'))