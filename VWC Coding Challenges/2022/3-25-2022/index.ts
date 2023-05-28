/**
 * Write a Javascript program that:
 * Creates an array of unique values that are included in all given arrays. The order and references of result values are determined by the first array.
 * Examples
 * _.intersection([2, 1], [2, 3]);
 * => [2]
 */

const _ = {
  intersection: (...arrays: [any, any]) => {
    const [A, B] = arrays;
    return A.filter((elem: any) => B.includes(elem))
  }
}

console.log(_.intersection([2,1], [2,3]))