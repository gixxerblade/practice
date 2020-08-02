let modifyArray = nums => {
  let result = nums.map(e => (e = e % 2 == 0 ? e * 2 : e * 3));
  return result
    .toString()
    .split(",")
    .join(" ");
};
console.log(modifyArray([1, 2, 3, 4, 5]).toString().split(',').join(' '));
