/* 
Grading policy:
-Every student receives a grade in the inclusive range from to 0 to 100.
-Any grade less 40 than is a failing grade.

Story: 
Sam is a professor at the university and likes to round each student's grades according to these rules:
-If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the
next multiple of 5.
-If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
For example, grade == 84 will be rounded to 85 but grade== 29 will not be rounded because the
rounding would result in a number that is less than 40.

Instructions:
Given the initial value of grade for each of Sam's n students, write code to automate the rounding
process. For each grade, round it according to the rules above and print the result on a new line.

Input Format
The first line contains a single integer denoting n (the number of students).
Each line i of the n subsequent lines contains a single integer, grade, denoting student i's grade.

Constraints
 1 <= n <= 60
 0 <= grade <= 100

Output Format
For each grade of the n grades, print the rounded grade on a new line.


I/O:

Sample Input - array
4
73
67
38
33

Sample Output - 
75 - 73 rounded up
67 - not rounded. > 3 to next multiple of 5
40 - 38 rounded up
33 - not rounded. < 38
*/

/**
 *  Diagramming
 *  function takes input students grades as an array
 *      create new array to hold new grades
 *      iterate through grades
 *          if grade is less than 38 leave grade leave alone
 *          otherwise if grade are less than 3 from a multiple of 5
 *              round up
 *
 *
 */

/**
 * Pseudocode
 *
 * function roundGrades(grade)
 *
 *     if grade < 38 return grade
 *     if grade is grade % 5 > 2
 *         grade = Math.ceil(grade/5) * 5
 */

let roundGrades = (grades) => {
  let newGrades = [];
  for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
    if (grades[i] < 38) newGrades.push(grades[i]);
    else if (grades[i] % 5 > 2) {
      newGrades.push(Math.ceil(grades[i] / 5) * 5);
    } else newGrades.push(grades[i]);
  }
  return newGrades;
};
let grades = [73, 67, 38, 33];

console.log(roundGrades(grades));
