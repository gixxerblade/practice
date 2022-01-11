/**
 * Write a JavaScript function to extract unique characters from a string.
 * @Input
 * "thequickbrownfoxjumpsoverthelazydog"
 * @Output
 * "thequickbrownfxjmpsvlazydg"
 */

const extractUnique = (str: string) => {
  const seen: Record<string, boolean> = {};
  return Array.from(str).filter((letter) => {
    return seen.hasOwnProperty(letter) ? false : seen[letter] = true
  }).join('')
}

const extractUniqueUsingSet = (str: string) => {
  return [...new Set(str.split(''))].join('')
}

console.log(extractUnique("thequickbrownfoxjumpsoverthelazydog"));
console.log(extractUnique("aaaaaaabbbbbbccccccddddeefghhhhijjjkkkklmnoppqqrssstuuuvvvwxyzzzz"));
console.log(extractUniqueUsingSet('thequickbrownfoxjumpsoverthelazydog'));