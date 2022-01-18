/**
 * Write a JavaScript function to compute the factors of a positive integer.
 * Input
 * console.log(factors(15));  // [1,3,5,15] 
 * console.log(factors(16));  // [1,2,4,8,16] 
 * console.log(factors(17));  // [1,17]
 * Output
 * [1,3,5,15]
 * [1,2,4,8,16]
 * [1,17]
 */

const factors = (num: number): number[] => {
  const result: number[] = []
  for (let i = 0; i <= num; i++) {
    if(num % i === 0) {
      result.push(i)
    }
  }
  return result.sort((a,b) => a - b)
}

console.log(factors(15));  // [1,3,5,15] 
console.log(factors(16));  // [1,2,4,8,16] 
console.log(factors(17));  // [1,17]
