/**
 * Write a JavaScript program that:
 * Creates an array of elements split
 * into groups the length of size. If array can't be split evenly,
 * the final chunk will be the remaining elements.
 * ex: chunk(array, [size=1])
 * @input
 * chunk(['a', 'b', 'c', 'd'], 2);
 * chunk(['a', 'b', 'c', 'd'], 3);
 * @output
 * [['a', 'b'], ['c', 'd']]
 * [['a', 'b', 'c'], ['d']]
 */

const chunk = (input: any[], size: number = 1) => {
  if (size <= 1) {
    return input
  }
  return input.reduce((arr: any[], item: any, currentIndex: number) => {
    return currentIndex % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]]
  }, [])
}

console.log(chunk(['a', 'b', 'c', 'd']))
console.log(chunk(['a', 'b', 'c', 'd'], 0))
console.log(chunk(['a', 'b', 'c', 'd'], 2))
console.log(chunk(['a', 'b', 'c', 'd'], 3))
console.log(chunk(['a', 'b', 'c', 'd'], 4))
