/**
 * Write a Javascript program that:
 * Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).
 * Examples
 * var array = [1, 2, 3, 4];
 * var evens = _.remove(array, function(n) {
 *   return n % 2 == 0;
 * });
 *  
 * console.log(array);
 * => [1, 3]
 *  
 * console.log(evens);
 * => [2, 4]
 * 
 */

const _ = {
  remove: (arr: any[], fn: (n: any) => any) => {
    const result = [];
    if (!(arr !== null && arr.length)) {
      return result;
    }
  }

}
const array = [1, 2, 3, 4];
const evens = _.remove(array, (n) => n % 2)
console.log(evens);
