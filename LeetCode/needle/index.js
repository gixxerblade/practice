/* 
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1 
*/

let strStr = (haystack, needle) => {
  if (needle === "") return 0;
  if (haystack.indexOf(needle) !== -1) {
    return haystack.indexOf(needle);
  }
  return -1;
};
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));