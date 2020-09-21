var removeElement = function (nums, ...val) {
  let len = nums.length;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (val.indexOf(nums[i]) !== -1) {
      nums.splice(i, 1);
      count++;
      i--;
    }
  }

  return len - count;
};

console.log(removeElement([3, 2, 2, 3], 3));