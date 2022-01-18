/**
 * Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.
 * @Input
 * console.log(dec_to_bho(120,'B'));
 * console.log(dec_to_bho(120,'H'));
 * console.log(dec_to_bho(120,'O'));
 * @Output
 * "1111000"
 * "78"
 * "170"
 */

type Radix = 'B' | 'H' | 'O';
const dec_to_bho = (num: number, radix: Radix) => {
  const num2Bin = (num: number) => num.toString(2)
  const num2Hex = (num: number) => num.toString(16)
  const num2Oct = (num: number) => num.toString(8)
  const map = {
    B: num2Bin(num),
    H: num2Hex(num),
    O: num2Oct(num),
  }
  return map[radix]
}

console.log(dec_to_bho(120, 'B'));
console.log(dec_to_bho(120, 'H'));
console.log(dec_to_bho(120, 'O'));
console.log(dec_to_bho(11E1, 'O'));