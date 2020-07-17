/* 
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9  

The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.    

Function description

Complete the diagonalDifference function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
Each of the next n lines describes a row, arr[i], and consists of n space-separated integers arr[i][j].

Constraints
-100 <= arr[i][j] <= 100

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3

11 2 4
4 5 6
10 8 -12

Sample Output

15

Explanation

The primary diagonal is:

11
   5
     -12

Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10

Sum across the secondary diagonal: 4 + 5 + 10 = 19

Difference: |4 - 19| = 15

Note: |x| is the absolute value of x

Diagramming:

Take input a 2d array square matrix
e.g.,
2 3 4 5 
3 6 5 8 
6 4 6 0 
1 0 3 3 

function diagonalDifference 2d array as argument
    empty top left to bottom right array storage
    empty bottom right to top left array storage
    iterate through array columns
        iterate though array rows
            if to find top left to bottom right elements
                push elements to left to bottom right array       
            if to find bottom right to top left elements
                push elements to bottom right to top left array
    return arrays, reduce by adding them together, find abs value of both

Pseudo Code
function diagonalDifference(2D array){
    topLeftToBottomRight = []
    bottomRightToTopLeft = []
    for each loop rows{
        for each loop columns{
            if logic to find left diag
                topLeftToBottomRight.push(array[c][r])
        }
    }
}
*/

const matrix = [
  [11, 2, 4], //row 0, col 0
  [4, 5, 6], //row 1, col 1
  [10, 8, -12], //row 2, col 2
];

let diagonalDifference = (arr) => {
  let leftToRight = 0,
    rightToLeft = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
    leftToRight += arr[i][i];
    rightToLeft += arr[i][j];
  }
  return Math.abs(leftToRight - rightToLeft);
};
console.log(diagonalDifference(matrix));
