/**
 * Write a JavaScript function to format a number up to specified decimal places.
 * @Input
 * console.log(decimals(2.100212, 2));
 * console.log(decimals(2.100212, 3));
 * console.log(decimals(2100, 2));
 * @Output
 * "2.10"
 * "2.100"
 * "2100.00"
 */


const decimals = (num: number, places: number = 2) => {
  return num.toFixed(places)
}
console.log(decimals(2.100212));
console.log(decimals(2.100212, 3));
console.log(decimals(2100));
