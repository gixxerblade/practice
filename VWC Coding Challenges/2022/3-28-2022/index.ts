/**
 * Write a Javascript program that:
 * Recursively flattens array.
 * Examples
 * _.flattenDeep([1, [2, [3, [4]], 5]]);
 * => [1, 2, 3, 4, 5]
 */

const _ = {
  flattenDeep: (arr: unknown[]): unknown[] => {
    const flattened: any[] = []
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        flattened.push(..._.flattenDeep(item))
      } else {
        flattened.push(item)
      }
    })
    return flattened;
  },
}

console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));

