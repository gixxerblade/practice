/*
Your input variable will contain two strings of equal length, separated by a comma. 
You have to check whether the second string is a permutation of the first string. 
Print "Yes" if it is, "No" if not.
 */

const value = 'brian,airbn';
const val = '14467,42641';

const checkScrambles = (str) => {
  const res = str.split(',').map((word) => word.split('').sort().join(''));
  return res[0] === res[1] ? 'Yes' : 'No';
};
console.log(checkScrambles(value));
console.log(checkScrambles(val));
