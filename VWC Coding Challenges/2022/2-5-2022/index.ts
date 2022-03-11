/**
 * Write a JavaScript program to create a new object from the combination of two or more objects.
 * Input
 * const object = {
 *   a: [{ x: 2 }, { y: 4 }],
 *   b: 1
 * };
 * const other = {
 *   a: { z: 3 },
 *   b: [2, 3],
 *   c: 'foo'
 * };
 * console.log(merge(object, other));
 * Output
 * {"a":[{"x":2},{"y":4},{"z":3}],"b":[1,2,3],"c":"foo"}
 */

const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo'
};
const merge = (...objects) => {
  return objects
}
console.log(merge(object, other));