// Prompt:
// Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i]
// You must write an algorithm that runs in O(n) time
// and without using the division operation.

const productExceptSelf = (nums: number[]): number[] => {
  let total = 1;
  let totalZeros = 0;

  nums.forEach((num) => {
    if (num === 0) {
      totalZeros++
    } else {
      total *= num
    }
  });

  return nums.map((num) => {
    if (totalZeros > 1) {
      return 0;
    } else if (totalZeros === 1) {
      return num === 0 ? total : 0
    }
    return total / num;
  })
}

console.log(productExceptSelf([1, 2, 3, 4])); //-> [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); //-> [0,0,9,0,0]
console.log(productExceptSelf([3, 4, 6, 1, 2])); //-> []