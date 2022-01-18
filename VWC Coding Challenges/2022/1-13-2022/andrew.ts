/**
 * 
 * Write a function that takes in a non-empty array of distinct integers and an
 * integer representing a target sum. If any two numbers in the input array sum
 * up to the target sum, the function should return them in an array, in any
 * order. If no two numbers sum up to the target sum, the function should return
 * an empty array.
 * 
 * 
 * Note that the target sum has to be obtained by summing two different integers
 * in the array; you can't add a single integer to itself in order to obtain the
 * target sum
 * You can assume that there will be at most one pair of numbers summing up to
 * the target sum.
 * 
 * array = [3, 5, -4, 8, 11, 1, -1, 6]
 * 
 * targetSum  = 1
 * 
 * sampelOutput = [-1, 11]
 * 
 * function twoNumberSum(array, targetSum) {}
 */

const array = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10

const removeDupes = (arr: number[]) => {
  const seen: Record<number, boolean> = {};
  return arr.filter((num) => {
    return seen.hasOwnProperty(num) ? false : seen[num] = true
  }).map(Number)
}
const twoNumberSum = (arr: number[], target: number) => {
  const solution: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let total: number = 0
      total += arr[i] + arr[j]
      if (total === target && i !== j) {
        solution.push(arr[i], arr[j])
      }
      total = 0
    }
  }
  return solution.length ? removeDupes(solution) : [];
}

console.log(twoNumberSum(array, targetSum))

const twoNumberSum1 = (array: number[], targetSum: number) => {
  const solution: number[] = [];
  for (let i = 0; i < array.length; i++) {
    let first = array[i];
    let expected = targetSum - first;
    const remaining = array.slice(i + 1, array.length)
    const second = remaining.filter((num) => num === expected)
    if(second.includes(expected)){
      solution.push(first, expected)
    }
  }
  return solution
}

console.log(twoNumberSum1(array, targetSum))