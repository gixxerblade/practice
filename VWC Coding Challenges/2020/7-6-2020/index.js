/* 
Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
You may return any answer array that satisfies this condition.
*/

const A = [2, 8, 7, 6, 9, 11];

const arrangeNumbers = (arr) => {
    //separate into two arrays
  let even = [];
  let odd = [];
  let newArr = [];
  //iterate through array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else odd.push(arr[i]);
  }
  //Merge odd and even arrays depending on index [0]
  if (even[0] === arr[0]) newArr = even.map((a, b) => [a, odd[b]]);
  else newArr = odd.map((a, b) => [a, even[b]]);
  // flat wouldn't work? 
  return [].concat(...newArr)
};
console.log(arrangeNumbers(A));
