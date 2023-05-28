/**
 * Write a Javascript program that:
 * Creates an array excluding all given values.
 * Examples
 * _.without([2, 1, 2, 3], 1, 2);
 * => [3]
 */

const _ = {
  without: (arr: unknown[], ...terms: any) => {
    return arr.filter((val) => !terms.includes(val))
  }
}

console.log(_.without([2, 1, 2, 3, 'lol'], 1, 2, 'lol'))

