/* 
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
 */

// Doesn't work in LeetCode 😭
/*  let removeDuplicates = (nums) => {
  let res = new Set(nums);
  return Array.from(res);
};
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
 */

let removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[n]) {
      n++;
      nums[n] = nums[i];
    }
  }
  return n + 1;
};

let remove = (nums) => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (arr.indexOf(nums[i]) === -1) arr.push(nums[i]);
  }
  return (nums = arr);
};
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log("Remove: ", remove([1, 1, 2]));
console.log("Remove: ", remove([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
