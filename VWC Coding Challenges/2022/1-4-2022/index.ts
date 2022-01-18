/**
 * Write a JavaScript function to convert a number from one base to another.
 * @Input
 * console.log(base_convert('E164',16,8));
 * console.log(base_convert(1000,2,8));
 * @Output
 * "160544"
 * "10"
 */

// This method will convert any radix to another radix from base1 to base32.
// I only allowed common bases 2, 8, 10, & 16 in this example
type Radix = 2 | 8 | 10 | 16
const baseConvert = (num: any, radixFrom: Radix, radixTo: Radix) => {
  return parseInt(num, radixFrom).toString(radixTo)
}

console.log(baseConvert('E164', 16, 8));
console.log(baseConvert(1000, 2, 8));