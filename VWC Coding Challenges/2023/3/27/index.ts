/**
 * Write a JavaScript function to convert an amount to coins.
 * Input
 * 46
 * Output
 * 25, 10, 10, 1
 */

const makeChange = (amountToConvert: number) => {
  const denominations: number[] = [25, 10, 5, 1];
  const coins: number[] = [];
  denominations.forEach((denomination) => {
    while(amountToConvert >= denomination) {
      coins.push(denomination)
      amountToConvert -= denomination
    }
  });
  return coins.join(', ');
}

console.log(makeChange(46))
console.log(makeChange(41))