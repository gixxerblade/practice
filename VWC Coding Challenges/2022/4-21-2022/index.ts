/**
 * Write a JavaScript program to search a date within a string.
 * Input
 * console.log(is_dateString("01/01/2015"));
 * console.log(is_dateString("01/22/2015"));
 * console.log(is_dateString("32/01/2015"));
 * Output
 * true
 * true
 * false
 * 
 */

const is_dateString = (date: string): boolean => Date.parse(date) ? true : false

console.log(is_dateString("01/01/2015"));
console.log(is_dateString("01/22/2015"));
console.log(is_dateString("32/01/2015"));