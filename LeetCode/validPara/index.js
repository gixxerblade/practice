/* 
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "([)]"
Output: false

Example 5:
Input: "{[]}"
Output: true
 */

function isMatchingBrackets(str) {
  let arr = [];
  const brackets = new Map();
  brackets.set(")", "(");
  brackets.set("]", "[");
  brackets.set("}", "{");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      arr.push(str[i]);
    } else {
      if (arr[arr.length - 1] === brackets.get(str[i])) {
        arr.pop();
      }
    }
  }
  return arr.length === 0;
}

console.log(isMatchingBrackets("(){}")); // returns true
console.log(
  isMatchingBrackets(
    "[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"
  )
); // returns true
console.log(isMatchingBrackets("({(()))}}")); // returns false
