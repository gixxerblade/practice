//Write a JavaScript program that will return true if a value is an empty object, collection,
// map or set, has no enumerable properties or is any type that is not considered a collection.

const isEmpty = (value: unknown) => {
  if (typeof value === 'object' && value !== null) {
    if (Array.isArray(value)) {
      return value.length === 0;
    }
    if (value instanceof Map || value instanceof Set) {
      return value.size === 0
    }
    return Object.keys(value).length === 0
  }
    return false;
  }

console.log(isEmpty(new Map()));
console.log(isEmpty(new Set()));
console.log(isEmpty([]));
console.log(isEmpty({}));
console.log(isEmpty(''));
console.log(isEmpty([1, 2]));
console.log(isEmpty({ a: 1, b: 2 }));
console.log(isEmpty('text'));
console.log(isEmpty(123));
console.log(isEmpty(true));