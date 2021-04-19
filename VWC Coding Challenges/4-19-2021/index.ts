/* 
* Write a JavaScript program to apply a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values.
*/

const reduceSuccessive = (arr: number[], fn: Function, initialVal: number) => {
  let acc: number = initialVal;
  let result: number[] = []; // empty array to push values to
  arr.forEach((val) => {
    //iterate over arr
    result.push(acc); //push new values to result
    acc = fn(acc, val); //reduce function
  });
  result.push(acc); //push new values to result
  return result;
};

console.log(reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0));
console.log(reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc * val, 1));
