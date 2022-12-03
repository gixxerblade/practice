// given two strings write a function that returns a boolean to determine the second string
// is and anagram of the first string
// time requirements O(N)
// first give me your framework steps on what your approach to solve it would be
// then give me your O(N) solution

/**
 * Steps to solve:
 * All strings to lowercase
 * Check if strings are equal length. If not, then not an anagram
 * Sort strings
 * If str1 = str2 return true
 */

let checkAnagram = (str1, str2) => {
  newStr1 = new Set(str1);
  console.log(newStr1.length);
  if (str1.length !== str2.length) return false;
  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");
  if (sortedStr1 === sortedStr2) return true;
  return false;
};
//console.log(checkAnagram("cinema", "iceman"));

let checkAnagrams = (str1, str2) => {
  //check if strings are same len. If not, not anagram
  str1.length !== str2.length && false;
  //make everything same case.
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // create character map to count the frequency of letters
  // using key:value pairs where key = letter, value = frequency
  const charMap = (string) => {
    let charObj = {};
    for (let char of string) {
      charObj[char] = charObj[char] + 1 || 1;
    }
    return charObj;
  };

  let str1charMap = charMap(str1);
  let str2charMap = charMap(str2);

  // iterate through object 1 to check frequency of letters
  for (char in str1charMap) {
    console.log(str1charMap[char], str2charMap[char]);
    str1charMap[char] !== str2charMap[char] && false;
  }
  return true;
};
console.log(checkAnagrams("Cinema", "iceman"));
console.log(checkAnagrams("Dormitory ", "dirty room"));

