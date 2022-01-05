/**
 * Write a JavaScript function to find the lowest value in an array.
 * @Input
 * console.log(min([12,34,56,1]));
 * console.log(min([-12,-34,0,-56,-1]));
 * @Output
 * 1
 * -56
 */

const min = (arr: number[]) => {
  let lowest = 0
  for (let i = 0; i < arr.length; i++) {
    lowest = arr[i];
    let next = arr[i + 1]
    if (lowest > next) {
      next = lowest
    } else {
      lowest[i++]
    }
  }
  return lowest
}
console.log(min([12, 34, 56, 1]));
console.log(min([-12, -34, 0, -56, -1]));
console.log(min([0, -1, -100, 300]));