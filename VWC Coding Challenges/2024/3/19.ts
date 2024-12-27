/**
 * Write a Javascript program that:
 * Accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration.
 * Examples
 * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]); => [['a', 1, true], ['b', 2, false]]
 *  
 * _.unzip(zipped); => [['a', 'b'], [1, 2], [true, false]]
 */

export const _ = {
  zip: <T extends any[]> (...args: T) => {
    const maxLen = Math.max(...args.map((arg) => arg.length))
    return Array.from({ length: maxLen }).map((_, i) => {
      return Array.from({ length: args.length }, (_, k) => args[k][i]);
    });
  },
  unzip: <T extends unknown>(arrayOfArrays: T[][]) => {
    return arrayOfArrays[0].map((_, index) => arrayOfArrays.map(row => row[index]));
  }
}
