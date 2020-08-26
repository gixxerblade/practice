//Given a 32-bit signed integer, reverse digits of an integer.
// Leetcode is stupid and this doesn't work but the second one does
let reverse = function (x) {
  let last,
    rev = 0,
    num = Math.abs(x),
    sign = Math.sign(x);
  while (num > 0) {
    last = Math.floor(num % 10);
    rev = rev * 10 + last;
    num = Math.floor(num / 10);
  }
  if (rev > Math.pow(2, 31) || rev < Math.pow(2, -31)) return 0;
  else return rev * sign;
};
//console.log(reverse(102));
//console.log(reverse(-123));
//console.log(reverse(1534236469));
//console.log(reverse(10));
//console.log(reverse(100));

let rev2 = (x) => {
  let sign = Math.sign(x);
  let res = parseInt(x.toString().split("").reverse().join(""), 10);
  if (res > Math.pow(2, 31) || res < Math.pow(2, -31)) return 0;
  return sign * res;
};
//console.log(rev2(102));
console.log(rev2(-123));
//console.log(reverse(1534236469));
