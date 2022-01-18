// Write a Javascript program that:
// Flattens array a single level deep.
// Examples
// _.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]

const _ = {
  flatten: (array: any[]): any[] => {
    return Array.prototype.concat.apply([], array);
  },
};

console.log(_.flatten([1, [2, [3, [4]], 5]]));
