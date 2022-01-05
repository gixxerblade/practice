/**
 * Write a JavaScript function to find the GCD (greatest common divisor) of more than 2 integers.
 * @Input
 * console.log(gcd_more_than_two_numbers([3,15,27]));
 * console.log(gcd_more_than_two_numbers([5,10,15,25]));
 * @Output
 * 3
 * 5
 */

import { gcd, N } from '../12-28-2021';

const gcd_more_than_two_numbers = (arr: N[]): N => {
  let result = arr[0]
  for (let i = 0; i < arr.length; i++) {
    result = gcd(arr[i], result)
    if (result === 1) {
      return 1
    }
  }
  return result
}

console.log(gcd_more_than_two_numbers([3,15,27]));
console.log(gcd_more_than_two_numbers([5,10,15,25]));
