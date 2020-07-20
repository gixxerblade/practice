/* 
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10⁻⁴ are acceptable.

Example
arr = [1,1,0,-1,-1]

There are n = 5 elements, two positive, two negative and one zero. Their ratios are ⅖ = .400000, ⅖ = .400000 and ⅕ = .200000. Results are printed as:

0.400000
0.400000
0.200000

Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers

Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Diagramming

Three empty arrays positive, zero, negative
Loop through array and check if x > 0, x = 0, x < 0 and then respectively push to empty arrays
return array length / input array length to 6 places.

Pseudo Code

function plusMinus(arr) 
    let positive = [], negative = [], zero = []
    for(let i = 0; i < arr.length; i++)
        if(arr[i] > 0) positive.push(arr[i])
        if(arr[i] < 0) negative.push(arr[i])
        if(arr[i] = 0) zero.push(arr[i])
    let result1 = (positive.length/arr.length).toFixed(6)
    let result2 = (negative.length/arr.length).toFixed(6)
    let result3 = (zero.length/arr.length).toFixed(6)
    return result1, result2, results3
*/

let finalAnswer = (arr1, arr2) => {
  let final = arr1.length / arr2.length;
  return final.toFixed(6);
};
let plusMinus = (arr) => {
  let positive = [],
    negative = [],
    zero = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positive.push(arr[i]);
    if (arr[i] < 0) negative.push(arr[i]);
    if (arr[i] === 0) zero.push(arr[i]);
  }
  let posRes = finalAnswer(positive, arr);
  let negRes = finalAnswer(negative, arr);
  let zeroRes = finalAnswer(zero, arr);
  return `${posRes}\n${negRes}\n${zeroRes}`
};
console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
