/**
 * Write a JavaScript program that work as a trim function (string) using regular expression.
 * Input
 * console.log(Trim(' VWC '));
 * Output
 * 'VWC'
 */

const Trim = (str: string) => str.replace(/\s/, '')

console.log(Trim(' VWC '));
console.log(Trim(' VWC hello'));