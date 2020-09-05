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
var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  nums2.length = n;
  nums1 = nums1.concat(nums2);
  return nums1.sort((a, b) => a - b);
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
