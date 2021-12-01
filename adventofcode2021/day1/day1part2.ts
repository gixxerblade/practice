import {input} from './day1input'

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

const day1part2 = (arr: number[]) => {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    const window1 = [arr[i], arr[i + 1], arr[i + 2]].reduce((a, b) => a + b);
    const window2 = [arr[i + 1], arr[i + 2], arr[i + 3]].reduce((a, b) => a + b);
    if (window2 > window1) {
      count++
    }
  } return count
}

console.log(day1part2(input))