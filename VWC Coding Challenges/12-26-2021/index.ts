/**
 * Write a JavaScript function to get the least common multiple (LCM) of two numbers.
 * @Input
 * console.log(lcm_two_numbers(3,15));
 * console.log(lcm_two_numbers(10,15));
 * @Output
 * 15
 * 30
 */
// type N = number
// const gcd = (a: N, b: N): N => {
//   if (a === 0) {
//     return b
//   }
//   return gcd(b % a, a)
// }
import { gcd, N } from '../12-28-2021';
const lcm_two_numbers = (a: N, b: N): N => {
  return Math.abs(a * b) / gcd(a, b)
}

console.log(lcm_two_numbers(3, 15));
console.log(lcm_two_numbers(10, 15));