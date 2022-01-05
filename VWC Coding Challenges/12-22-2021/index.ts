/**
 * There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
 * @Input
 * array1 = [1,0,2,3,4];
 * array2 = [3,5,6,7,8,13];
 * @Output
 * [4, 5, 8, 10, 12, 13]
 */

const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];

const arrayLengths = (arr1: number[], arr2: number[]) => {
  if (arr1.length >= arr2.length) {
    return { longest: arr1, shortest: arr2 }
  }
  return { longest: arr2, shortest: arr1 }
}
const computeSumOfIndexes = (arr1: number[], arr2: number[]) => {
  const arrSorted = arrayLengths(arr1, arr2);
  const { longest, shortest } = arrSorted
  return Object.keys(longest).map((_num: string, idx: number) => {
    return longest[idx] + (shortest[idx] || 0)
  })
}

console.log(computeSumOfIndexes(array1, array2))