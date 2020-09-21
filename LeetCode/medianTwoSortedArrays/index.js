var findMedianSortedArrays = function (nums1, nums2) {
  let both = [...nums1, ...nums2].sort((a, b) => a - b);
  if (both.length % 2 !== 0) {
    return both[Math.floor(both.length / 2)];
  } else {
    let left = both[Math.floor((both.length - 1) / 2)];
    let right = both[Math.floor((both.length - 1) / 2 + 1)];
    return (right + left) / 2;
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
