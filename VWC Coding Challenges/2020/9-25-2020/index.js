/* 
Write a JavaScript program to Check if a given string is an anagram of 
another string (case-insensitive, ignores spaces, punctuation and special characters)
 */

let charMap = (string) => {
  let charObj = {};
  for (let char of string) {
    charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
};

const isAnagram = (string, possible) => {
  let str1charMap = charMap(string.replace(/[^a-zA-Z0-9]/).toLowerCase());
  let str2charMap = charMap(possible.toLowerCase());
  for (char in str1charMap) {
    if (str1charMap[char] !== str2charMap[char]) return false;
  }
  return true;
};

console.log(isAnagram("iceman", "cinema"));
console.log(isAnagram("icemans", "cinema"));
console.log(isAnagram("madam", "madam"));
console.log(isAnagram("madams", "madam"));
