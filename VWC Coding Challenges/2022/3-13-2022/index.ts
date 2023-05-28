/**
 * Write a Javascript program that:
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
 * Examples
 * _.zip(['a', 'b'], [1, 2], [true, false]);
 * => [['a', 1, true], ['b', 2, false]]
 */

const _ = {
  zip: <T extends unknown>(...arr: T[]) => {
    return arr.map((value, idx) => [value, ...arrays.map((arr) => arr[idx])])
  },
  unzip: <T extends any>([...args]: T[]) => _.zip(...args),
}
console.log(_.zip(['a', 'b'], [1, 2], [true, false]))
const unzip = _.zip(['a', 'b'], [1, 2], [true, false])
console.log(_.unzip(unzip))