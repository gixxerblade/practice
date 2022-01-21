/**
 * Write a JavaScript function that reverse a number.
 * Input
 * x = 32243;
 * Output
 * 34223
 */

const reverseNumber = (num: number) => {
  try {
    if (Number.isInteger(num)) {
      let digit = 0
      let reversed = 0
      let unsignedInteger = num * 1 > 0 ? num : num * -1
      while (unsignedInteger > 0) {
        digit = unsignedInteger % 10
        reversed = Math.floor(reversed * 10 + digit)
        unsignedInteger = Math.floor(unsignedInteger / 10)
      }
      return reversed * Math.sign(num)
    } else {
      throw new Error('Must be an integer')
    }
  } catch (error) {
    return error
  }
}

console.log(reverseNumber(32243));
console.log(reverseNumber(32.4));
console.log(reverseNumber(-32));


