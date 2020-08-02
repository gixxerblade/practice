/**
 * Complete the beautifulDays function in the editor below. It must return the number of beautiful days in the range.
 *
 * @param {starting day} i
 * @param {ending day} j
 * @param {divisor} k
 *
 *
 */

let beautifulDays = (i, j, k) => {
  let dayRange = [],
    lastDigit,
    count = 0;
  for (let index = i; index <= j; index++) {
    dayRange.push(index);
  }
  dayRange.forEach((num) => {
    let clone = num;
    let reverse = 0;
    while (num > 0) {
      // Isolate last digit
      lastDigit = num % 10;
      // Add last digit to the reverse
      reverse = Math.floor(reverse * 10 + lastDigit);
      // Remove last digit from number
      num = Math.floor(num / 10);
    }
    Math.abs(clone - reverse) % k === 0 && count++;
  });
   return count;
};
console.log(beautifulDays(20, 23, 6));
