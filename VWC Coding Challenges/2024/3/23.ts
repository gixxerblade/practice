/**
 * Write a Javascript program that:
 * Creates a slice of array with n elements taken from the end.
 * Examples
 * _.takeRight([1, 2, 3]); => [3]
 *  
 * _.takeRight([1, 2, 3], 2); => [2, 3]
 *  
 * _.takeRight([1, 2, 3], 5); => [1, 2, 3]
 *  
 * _.takeRight([1, 2, 3], 0); => []
 * 
 */

export const _ = ({
  takeRight: (target: Array<number>, numToTake: number = 1) => {
    if (numToTake <= 0) {
      return [];
    }
    if (numToTake >= target.length) {
      return target;
    }
    return target.slice(target.length - numToTake)
  }
});

console.log(_.takeRight([1, 2, 3]));
console.log(_.takeRight([1, 2, 3], 2));
console.log(_.takeRight([1, 2, 3], 5));
console.log(_.takeRight([1, 2, 3], 0));
