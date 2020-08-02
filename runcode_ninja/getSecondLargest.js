let getSecondLargest = nums => {
  nums = nums
    //remove duplicates
    .filter((item, pos, self) => {
      return self.indexOf(item) == pos;
    });
  //find the largest
  let max = nums.reduce((e, f) => {
    return Math.max(e, f);
  });
  //filter out the largest
  let second = nums.filter(e => e != max);
  //return the largest
  second = Math.max(...second);
  console.log(second);
};

getSecondLargest([2, 3, 6, 6, 5]);
getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8]);
