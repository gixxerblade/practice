// Write a Javascript program that:
// Recursively flattens array.
// Examples
// _.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]

const _ = {
  flattenDeep: (array: unknown[]): unknown[] => {
    let flattened: unknown[] = [];
    array.forEach((el) => {
      if (Array.isArray(el)) {
        flattened.push(..._.flattenDeep(el));
      } else {
        flattened.push(el);
      }
    });
    return flattened;
  },
};
console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));
