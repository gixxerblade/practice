//Write a Javascript program that:
// returns an object composed from key-value pairs.
// Examples
// _.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }

type ArrayArgument = [string, number];
type ReturnObj = { [key: string]: number };
const _ = {
  fromPairs: (...array: ArrayArgument[]): ReturnObj=> {
    const obj = {};
    array.forEach((el) => {
      if (array.length === 2) {
        obj[el[0]] = el[1];
      }
    });
    return obj;
  },
};

console.log(_.fromPairs(["a", 1], ["b", 2]));
