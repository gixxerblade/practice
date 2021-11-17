/*
Your input variable will contain two strings of equal length, separated by a comma. 
You have to check whether the second string is a permutation of the first string. 
Print "Yes" if it is, "No" if not.
 */

const value1 = 'brian,airbn';
const val = '14467,42641';

// create character map to count the frequency of letters
// using key:value pairs where key = letter, value = frequency
const charMap = (string) => {
  let charObj = {};
  for (let char of string) {
    charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
};

const checkAnagrams = (str) => {
  let [str1, str2] = str.split(',')
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let str1charMap = charMap(str1);
  let str2charMap = charMap(str2);

  // iterate through object 1 to check frequency of letters
  for (let char in str1charMap) {
    if (str1charMap[char] !== str2charMap[char]) return "No";
  }
  return "Yes";
};
console.log(checkAnagrams(value1))
