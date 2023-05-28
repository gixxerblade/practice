/**
 * Write a JavaScript program that:
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 * Input
 * compact([0, 1, false, 2, '', 3]);
 * Output
 * [1, 2, 3]
 */

const compact = (arr: any[]) => arr.filter(Boolean)
console.log(compact([0, 1, false, 2, '', 3]));

