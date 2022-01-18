/* 
build a function that checks if with one edit (insert, remove, or replace a character) two strings would equal each other.
Example
pale, ple => true
pales, pale => true
pale, bale => true
pale, bake => false
*/

let splitStr = (str) => {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    newArr.push(str[i]);
  }
  return newArr;
};

let checkStr = (str1, str2) => {
  let str1Arr = splitStr(str1);
  let str2Arr = splitStr(str2);
  let count = 0;
  let longestStr =
    str1Arr.length >= str2Arr.length ? str1Arr.length : str2Arr.length;
  let shortestStr =
    str1Arr.length <= str2Arr.length ? str1Arr.length : str2Arr.length;
  for (let i = 0; i < longestStr; i++) {
    for (let j = 0; j < shortestStr; j++) {
      if (str1Arr[i] === str2Arr[j]) count++;
    }
  }
  let similarity = (2 * count) / (longestStr + shortestStr);
  return similarity > 0.5 ? "Similar" : "Not similar";
};

console.log(checkStr("pale", "ple"));
console.log(checkStr("pale", "bale"));
console.log(checkStr("pale", "pales"));
console.log(checkStr("pale", "bake"));
console.log(checkStr("hello", "hell"));
