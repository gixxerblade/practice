/**
 * Write a JavaScript program to flatten a given array up to the specified depth.
 * Input
 * console.log(flatten([1, [2], 3, 4])); 
 * console.log(flatten([1, [2, [3, [4, 5], 6], 7], 8], 2));
 * Output
 * [1,2,3,4]
 * [1,2,3,[4,5],6,7,8]
 */

const flattenDepth = (arr: any[], result: any[] = [], depth: number) => {
  arr.forEach((item) => {
    if (depth > 0 && Array.isArray(item)) {
      flattenDepth(item, result, depth - 1)
    } else {
      result.push(item)
    }
  })
  return result
}

const flatten = (arr: any[], depth?: number) => {
  if (!depth) {
    return arr.reduce((a, b) => a.concat(b), [])
  }
  return flattenDepth(arr, [], depth)
}

console.log(flatten([1, [2], 3, 4]));
console.log(flatten([1, [2, [3, [4, 5], 6], 7], 8], 2));