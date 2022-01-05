/**
 * Write a JavaScript function to convert a binary number to a decimal number.
 * @Input
 * console.log(bin_to_dec('110011'));
 * console.log(bin_to_dec('100'));
 * @Output
 * 51
 * 4
 */

const assertIsBinary = (b: string) => {
  const binaryRegex = /[1|0]+/
  if (binaryRegex.test(b)) {
    return b
  }
  throw new Error('Not a binary number')
}
// Only works on unsigned binary numbers
const binToDec = (b: string) => {
  assertIsBinary(b)
  return b
    .split('')
    .map(Number)
    .reverse()
    .map((num, i) => num * Math.pow(2, i))
    .reduce((total, binary) => total + binary)
}
console.log(binToDec('110011'));
console.log(binToDec('100'));
console.log(binToDec('43'));