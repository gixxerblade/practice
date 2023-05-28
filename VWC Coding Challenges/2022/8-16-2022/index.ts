/**
 * Write a Javascript program that:
Removes all given values from array
Examples
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']


 */
const array = ['a', 'b', 'c', 'a', 'b', 'c'];

const _ = {
  pull: <T>(arr: T[], ...toRemove: T[]) => arr.filter((item) => !toRemove.includes(item)),
  fromPairs: <T>(arr: T[][]) => Object.fromEntries(arr),
  intersection: <T>(arr1: T[], arr2: T[]): T[] => {
    const first = new Set(arr1);
    const second = new Set(arr2);
    return Array.from(new Set([...second].filter((values) => first.has(values))))
  }
}

console.log(_.pull(array, 'a', 'c'))

// Write a Javascript program that:
// returns an object composed from key-value pairs.
// Examples
console.log(_.fromPairs([['a', 1], ['b', 2]])); // => { 'a': 1, 'b': 2 }

// Write a Javascript program that:
// Creates an array of unique values that are included in all given arrays. The order and references of result values are determined by the first array.
// Examples
console.log(_.intersection([2, 1], [2, 3])); // => [2]
console.log(_.intersection([1,2,3,4,5,6], [5,6,7,8,3,4,2,]));


