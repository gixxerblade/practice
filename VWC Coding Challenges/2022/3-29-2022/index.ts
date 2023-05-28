/**
 * Write a Javascript program that:
 * Creates a slice of array with n elements dropped from the end.
 * Examples
 * _.dropRight([1, 2, 3]);
 * => [1, 2]
 *  
 * _.dropRight([1, 2, 3], 2);
 * => [1]
 *  
 * _.dropRight([1, 2, 3], 5);
 * => []
 *  
 * _.dropRight([1, 2, 3], 0);
 * => [1, 2, 3]
 * 
 */
const array = [1, 2, 3]
const _ = {
  dropRight: (arr: any[], len: number = 1) => {
    if (len === 0) {
      return arr
    }
    return arr.slice(0, -len)
  }
}

console.log(_.dropRight(array))
console.log(_.dropRight(array, 2))
console.log(_.dropRight(array, 5))
console.log(_.dropRight(array, 0))