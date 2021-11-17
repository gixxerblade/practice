/**
 * Easy Money
 * The Engineer Man Team  is running low on funds and so have
 * decided to try to disapprove the Collatz Conjecture and
 * collect the million dollar prize.
 * The team needs your help in verifying the some of the calculations.
 * The way that this works is that given a number `n` the next value
 * in the sequence will be:
 * 
 * `3n + 1` if `n` is odd
 * `n / 2` if `n` is even
 * Given these rules the Collatz Conjecture states that for any starting `n`
 * the sequence will eventually reach 1.
 * You need to compute how many iterations it takes for the sequence to
 * reach one for the given input (if it never reaches one return -1).
 * For example:
*/


const cc = num => {
  let count = 0
  while (num > 1) {
    if (num % 2 === 0) {
      num = num / 2
      count++
    } else {
      num = num * 3 + 1
      count++
    }
  }
  return count
}

console.log(cc(process.argv[2]))