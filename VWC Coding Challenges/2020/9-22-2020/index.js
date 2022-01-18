/**
 * Write a JavaScript program that will return true if a value is an empty object,
 * collection, map or set, has no enumerable properties or is any type that is not
 * considered a collection. *
 *
 * */

const isEmpty = (item) => {
  if (item.length === 0) return true;
  if (item.size === 0) return true;
  if (Object.entries(item).length === 0) return true;
  return false;
};

console.log(isEmpty(new Map()));
console.log(isEmpty(new Set()));
console.log(isEmpty([]));
console.log(isEmpty({}));
console.log(isEmpty(""));
console.log(isEmpty([1, 2]));
console.log(isEmpty({ a: 1, b: 2 }));
console.log(isEmpty("text"));
console.log(isEmpty(123));
console.log(isEmpty(true));
