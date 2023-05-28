/**
 * Write a Javascript program that:
 * returns an object composed from key-value pairs.
 * Examples
 * _.fromPairs([['a', 1], ['b', 2]]);
 * => { 'a': 1, 'b': 2 }
 */
const _ = {
  fromPairs: (arr: any[]) => {
    return arr.reduce(
      (
        acc: { [x: string]: any; },
        value: any[]
      ) => (acc[value[0]] = value[1], acc), {});
  }
}
console.log( _.fromPairs([['a', 1], ['b', 2]]))