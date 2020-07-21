/* 
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, arr = [1,3,5,7,9]. Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is 3 + 5 + 7 + 9 = 24. We would print

16 24

Function Description

Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

miniMaxSum has the following parameter(s):

arr: an array of 5 integers

Input Format

A single line of five space-separated integers.

Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14

Hints: Beware of integer overflow! Use 64-bit Integer.
*/

let miniMaxSum = (arr) => {
  let min = arr.sort((a, b) => a - b).slice(0, -1);
  let max = arr.sort((a, b) => a - b).slice(1);
  let minRes = min.reduce((a, b) => a + b);
  let maxRes = max.reduce((a, b) => a + b);
  console.log(`${minRes} ${maxRes}`);
};

console.log(miniMaxSum([1, 2, 3, 4, 5]));
console.log(miniMaxSum([7, 69, 2, 221, 8974]));
