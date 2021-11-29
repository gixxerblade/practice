/**
 * Using names.txt (right click and 'Save Link/Target As...'), 
 * begin by sorting it into alphabetical order. 
 * Then working out the alphabetical value for each name, 
 * multiply this value by its alphabetical position in the list 
 * to obtain a name score.
 * For example, when the list is sorted into alphabetical order, 
 * COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. 
 * So, COLIN would obtain a score of 938 × 53 = 49714.
 * What is the total of all the name scores in the file?
 */
const { names } = require('./names');

const totalOfNames = (n) => {
  return n
    .sort((a, b) => a.localeCompare(b))
    .map((word, idx) => {
      const position = idx + 1 // alphabetical position in list
      // word total
      const wordTotal = word
        .split('')
        .reduce((total, letter) => total + (letter.charCodeAt(0) - 64), 0)
      return wordTotal * position
    }).reduce((total, curr) => total+ curr,0)
}

console.log(totalOfNames(names))