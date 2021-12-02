/**
 * https://adventofcode.com/2021/day/1
 */
import { input } from './day1input'
import { fetchInput } from '../fetchInput.js'
const testValues = [
  199,
  200,
  208,
  210,
  200,
  207,
  240,
  269,
  260,
  263
]
const i = fetchInput('https://adventofcode.com/2021/day/1/input')
console.log(i)
const day1 = (arr: number[]) => {
  let count = 0
  arr.forEach((val, i, arr) => {
    if (arr[i + 1] > val) {
      count++
    }
  })
  return count
}

console.log(day1(input))