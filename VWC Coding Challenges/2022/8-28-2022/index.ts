/**
 * Write a JavaScript program that:
 * Creates a new array concatenating array with any additional arrays and/or values.
 * Examples
 * var array = [1];
 * var other = concat(array, 2, [3], [[4]]);
 * console.log(other);
 * => [1, 2, 3, [4]]
 *  
 * console.log(array);
 * => [1]
 * 
 */

 const array = [1];

 const concat = <T>(
  array: T[], 
  ...args: T[] extends unknown ? unknown[] : never
  ) => {
  let result: unknown[] = [...array]
  args.forEach((arg) => {
    if (Array.isArray(arg)) {
      result = [...result, ...arg]
    } else {
      result.push(arg)
    }
  })
  return result
}
 const other = concat(array, 2, [3], [[4]]);
 console.log(other);
 // => [1, 2, 3, [4]]
  
 console.log(array);
 // => [1]