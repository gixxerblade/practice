/**
 * Given a string s consisting of some words separated by some number of spaces, 
 * return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 */

const s = "   fly me   to   the moon  "

const lengthOfLastWord = (s: string) => {
  const sArr = s.trim().split(' ')
  const lastWord: string = sArr[sArr.length - 1]
  return lastWord.length
}

console.log(lengthOfLastWord(s))