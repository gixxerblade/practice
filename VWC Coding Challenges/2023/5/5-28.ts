/**
 * Write a Javascript program that:
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
 * Examples
 * _.zip(['a', 'b'], [1, 2], [true, false]); => [['a', 1, true], ['b', 2, false]]
 */
const data1 = ['a', 'b'];
const data2 = [1, 2];
const data3 = [true, false];
const zip = (...arrays: any[][]) => {
  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  return Array.from({ length: maxLength }, (_, i) => arrays.map(arr => arr[i]));
}

const _ = {
  zip,
};

console.log(_.zip(data1, data2, data3))