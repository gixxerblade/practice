/**
 * Write a JavaScript program to get the standard deviation of an array of numbers.
 * Input
 * console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21]));
 * console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21], true));
 * Output
 * 13.284434142114991
 * 12.29899614287479
 */

const standardDeviation = (arr: number[], sample?: boolean): number | Error => {
  if (!Array.isArray(arr)) {
    return new Error('Must be an array');
  }
  const mean = arr.reduce((acc, curr) => acc + curr) / arr.length;
  if (!Number(mean)) {
    return new Error('All array elements but be a number');
  }
  const result = Math.sqrt(
    arr.map((num) => Math.pow(num - mean, 2)).reduce((acc, cur) => acc + cur) /
      (sample ? arr.length - 1 : arr.length)
  );
  return result;
};
console.log(
  standardDeviation([
    9, 2, 5, 4, 12, 7, 8, 11, 9, 3, 7, 4, 12, 5, 4, 10, 9, 6, 9, 4,
  ])
);
console.log(standardDeviation([9, 2, 5, 4, 12, 7], true)); //3.169...
console.log(standardDeviation([9, 2, 5, 4, 12, 'lol'], true)); // Error
console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21])); // 13.284434142114991
console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21], true)); // 12.29899614287479
