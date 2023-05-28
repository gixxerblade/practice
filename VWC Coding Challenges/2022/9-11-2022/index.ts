/**
 * Write a JavaScript function to check whether a given value is IP value or not.
 * Input
 * console.log(is_IP('198.156.23.5'));
 * console.log(is_IP("172.16.0.1"));
 * Output
 * true
 * true
 */

const is_IP = (possibleIP: string) => possibleIP.split('.').every((range) => (
  +range <= 255 && +range >= 0
))

console.log(is_IP('198.156.23.5'));
console.log(is_IP("172.16.0.1"));