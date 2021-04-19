/* function isOdd(int) {
  return (int & 1) === 1;
}

function isEven(int) {
  return (int & 1) === 0;
}

let checkOddEven = (num) => {
  if (num < 0) console.log("Must be greater than or equal to 0");
  else {
    for (let i = 0; i <= num; i++) {
      isEven(i) && console.log(`${i}: even`);
      isOdd(i) && console.log(`${i}: odd`);
    }
  }
};
checkOddEven(100);

 */
// var merge = function (nums1, m, nums2, n) {
//   nums1.length = m;
//   nums2.length = n;
//   nums1 = nums1.concat(nums2);
//   return nums1.sort((a, b) => a - b);
// };
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// const stringWithBlank = "  a";

// const trimSpaces = (str) => {
//   let trimmed = str.trim();
//   trimmed.length ? trimmed : null
//   return trimmed
// };

// console.log(trimSpaces(stringWithBlank));

const fizzBuzz = (lower, upper) => {
  const values = [,,'fizz',,'buzz','fizz',,,'fizz','buzz',,'fizz',,,'fizzbizz'];
  for (lower = 0; lower < upper; lower++) {
    return values[i++ % 15] || i;
  }
}

fizzBuzz()