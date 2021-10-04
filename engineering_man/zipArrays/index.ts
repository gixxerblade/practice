// Merge two arrays in a zipper-like fashion.
//You'll get two inputs, each will be a comma separated list of numbers.
//Each input will contain the same amount of numbers.
//You'll need to merge the two lists by inserting numbers from value2 into value1.
//Each number from value2 should be inserted every other number starting after the first number in value 1.
const value1 = '9,5';
const value2 = '7,10';
const zip = (v1, v2) => {
  const arr1 = v1.split(',')
  const arr2 = v2. split(',')
  const len = arr1.length + arr2.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }
  return result.filter(Boolean).join(',');
};
console.log(zip(value1, value2));
