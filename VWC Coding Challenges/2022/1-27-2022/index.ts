/**
 * Write a JavaScript program to calculate the greatest common divisor between two or more numbers/arrays
 * @Input
 * console.log(gcd(8, 36));
 * console.log(gcd(...[12, 8, 32]));
 * @Output
 * 4
 * 4
 */

 export type N = number
 export const gcd = (a: N, b: N): N => {
   if (a === 0) {
     return b
   }
   return gcd(b % a, a)
 }

 const gcdTwoOrMore = (arr: N[]): N => {
  let result = arr[0]
  for (let i = 0; i < arr.length; i++) {
    result = gcd(arr[i], result)
    if (result === 1) {
      return 1
    }
  }
  return result
}

console.log(gcdTwoOrMore(8, 36));
console.log(gcdTwoOrMore(...[12, 8, 32]));