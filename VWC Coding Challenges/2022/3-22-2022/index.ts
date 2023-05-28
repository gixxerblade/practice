/**
 * Write a Javascript program that:
 * Removes all given values from array
 * Examples
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *  
 * _.pull(array, 'a', 'c');
 * console.log(array);
 * => ['b', 'b']
 * 
 */

interface Underline<T> {
  pull: <T extends unknown> (arr: T[], ...values: T[]) => T[]
}

const _: Underline<unknown> = {
  pull: (arr, ...values) => {
    if (arr.length && values.length) {
      return arr.filter((item) => !values.find((el) => el === item))
    }
    return arr;
  }
}
const array = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(_.pull(array, 'a', 'c'))
