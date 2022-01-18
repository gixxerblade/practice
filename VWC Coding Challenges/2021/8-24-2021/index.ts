const floor = (n: number): number => Math.floor(n)
const reverseNumber = (num: number): number => {
  let reverse = 0,
    lastDigit = 0;
  while (num > 0) {
    lastDigit = floor(num % 10);
    reverse = floor(reverse * 10 + lastDigit);
    num = floor(num / 10);
  }
  return reverse
};
console.log(reverseNumber(30))
console.log(reverseNumber(300))
console.log(reverseNumber(300343454))
console.log(reverseNumber(999991))
