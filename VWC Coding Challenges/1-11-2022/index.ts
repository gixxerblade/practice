/**
 * Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
 * Input
 * [1,2,3,4,5]
 * Output
 * 2,4
 */
const numbers = [1, 2, 3, 4, 5]
const findPenultimateNumbers = (arr: number[]) => {
  const sorted = arr.sort((a, b) => a - b)
  return [sorted[1], sorted[sorted.length - 2]].join(',')
}

console.log(findPenultimateNumbers(numbers))