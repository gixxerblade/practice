/* Count number frequency
Take a string of numbers and output the one which appears the most.
 */

const nums = '08989082882348823838';
const nums1 = '897494889999a';
const countNums = (n: any) => {
  let count: { [key: number]: number } = {};
  n.split('').forEach((num: any) => {
    count[num] = count[num] + 1 || 1;
  });
  return Object.keys(count).reduce((a: any, b: any) =>
    count[a] > count[b] ? a : b
  );
};
console.log(countNums(nums));

const l = '2,5,1';
const sumValues = (list: string) => {
  let count: number = 0;
  list.split(',').forEach((n) => {
    count += parseInt(n);
  });
  return count
};
console.log(sumValues(l));
