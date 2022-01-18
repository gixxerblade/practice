/**
 * Write a JavaScript function to round up an integer value to the next multiple of 5.
 * @Input
 * console.log(int_round5(32));
 * console.log(int_round5(137));
 * @Output
 * 35
 * 140
 */

const intRound5 = (num: number): number => {
  const modulo = num % 5
  return modulo > 0 ? num - modulo + 5 : num
}
console.log(intRound5(32));
console.log(intRound5(137));
console.log(intRound5(139));
console.log(intRound5(140));
console.log(intRound5(141));
console.log(intRound5(145));