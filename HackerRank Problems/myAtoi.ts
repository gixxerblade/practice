const toNumber = (s: string): number => {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    res = res * 10 + (s.charCodeAt(i) - '0'.charCodeAt(0))
  }
  return res
}
const myAtoi = (s: string): number => {
  s = s.trim();
  const valid = s.match(/^(\d+|[+-]\d+)/)
  if (valid) {
    const match = valid[0];
    let res = 0;
    switch (match[0]) {
      case '-':
        res = toNumber(match.slice(1)) * -1
        break;
      case '+':
        res = toNumber(match.slice(1));
        break;
      default:
        res = toNumber(match);
        break;
    } 
    if (res < (1 << 31)) { return 1 << 31 }    
    if (res > -(1 << 31) - 1) { return -(1 << 31) - 1 }
    return res
  }
  return 0
}
const s = '+0000000042 with words'
const difficult = "words and 987"
const a = "-91283472332"
const b = '+1'
// console.log(myAtoi(s));
// console.log(myAtoi(difficult));
// console.log(myAtoi(a));
console.log(myAtoi(b));


/**
 * The algorithm for myAtoi(string s) is as follows:
 * Read in and ignore any leading whitespace
 * Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present
 * Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored
 * Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2)
 * If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1
 * Return the integer as the final result
 * Note
 * Only the space character ' ' is considered a whitespace character
 * Do not ignore any characters other than the leading whitespace or the rest of the string after the digits
 * 
 */