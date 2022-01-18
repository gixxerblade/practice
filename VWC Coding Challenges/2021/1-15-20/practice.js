let filterOut = (filterArr, arr) => {
  let result = arr.filter(i => !filterArr.includes(i));
  return result;
};
console.log(filterOut([2, 4, 6], [1, 2, 3, 4, 5, 6, 7, 8]));
console.log(filterOut([1, 3, 4, 5, 6, 8], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

const f = x => (x < 2 ? 1 : x * f(x - 1));

console.log(f(10));
