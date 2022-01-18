/**
 * Write a JavaScript program to get n random elements at unique keys from array up to the size of array.
 * @Input
 * console.log(sampleSize([1, 2, 3], 2));
 * console.log(sampleSize([1, 2, 3], 4));
 * @Output
 * [3,2]
 * [2,3,1]
 */
type Arr = number[];
const sampleSize = ([...arr]: Arr, size: number) => {
  if (size > arr.length) {
    return new RangeError(
      'Sample size cannot be larger than the length of the array'
    );
  }
  if (size < 1) {
    return new Error('Size cannot be zero');
  }
  if(new Set(arr).size !== arr.length){
      return new Error("Cannot have duplicate values")
  }
  const result: Arr = [];
  while (result.length < size) {
    let value: number = arr[Math.floor(Math.random() * arr.length)];
    if (!result.includes(value)) {
      result.push(value);
    }
  }
  return result;
};
console.log(sampleSize([1, 2, 3], 4));
console.log(sampleSize([1, 2, 3], 0));
console.log(sampleSize([1, 2, 3], 2));
console.log(sampleSize([1, 2, 3], 2));
console.log(sampleSize([1, 1, 2], 2));

console.log(sampleSize(Array.from(Array(120).keys()), 6));
