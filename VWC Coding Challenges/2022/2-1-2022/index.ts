/**
 * Write a JavaScript program that will return true if a value is an empty object, collection, map or set, has no enumerable properties or is any type that is not considered a collection.
 * Input
 * console.log(isEmpty(new Map()));
 * console.log(isEmpty(new Set()));
 * console.log(isEmpty([]));
 * console.log(isEmpty({}));
 * console.log(isEmpty(''));
 * console.log(isEmpty([1, 2]));
 * console.log(isEmpty({ a: 1, b: 2 }));
 * console.log(isEmpty('text'));
 * console.log(isEmpty(123));
 * console.log(isEmpty(true));
 * Output
 * true
 * true
 * true
 * true
 * true
 * false
 * false
 * false
 * true
 * true
 */
const objs = [
  new Map(),
  new Set(),
  [],
  {},
  '',
  [1, 2],
  { a: 1, b: 2 },
  'text',
  123,
  true
]
const isEmpty = (obj: unknown): boolean => {
  return Object.keys(obj).length ? false : true
}

objs.forEach(element => {
  console.log(isEmpty(element))
});