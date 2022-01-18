/**
 * Write a JavaScript function to get the greatest common divisor (gcd) of two integers.
 * @Input
 * console.log(gcd_two_numbers(12, 13));
 * console.log(gcd_two_numbers(9, 3));
 * @Output
 * 1
 * 3
 */

export type N = number
export const gcd = (a: N, b: N): N => {
  if (a === 0) {
    return b
  }
  return gcd(b % a, a)
}

console.log(gcd(12, 13));
console.log(gcd(9, 3));

