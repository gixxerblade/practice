/**
 * Missing Sequence Sums
 * Given a sequence of numbers with two missing from each sequence, find the two missing numbers from each sequence and
 * sum them together.
 */

const seq1 = '1,2,4,5,6,8,9,10'

const missing = (sequence) => {
  return sequence
    .split(',')
    .map(Number)
    .reduce(
      (acc: number, num: number, idx: number, arr: number[]) => {
        if (arr[idx + 1] && (arr[idx + 1] - num > 1)) {
          acc + num
        }
      }, 0)
}
console.log(missing(seq1))

