//Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

/*
Example 1:

Input: 121
Output: true

Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Bonus: solve without converting num to string
 */

let isPalindrome = (x) => {
  let last,
    rev = 0,
    temp = x;
  if (x === 0) return true;
  if (Math.sign(x) === -1) return false;
  if (x % 10 === 0) return false;
  while (x > 0) {
    last = Math.floor(x % 10);
    rev = (rev * 10) + last;
    x = Math.floor(x / 10);
  }
  return rev === temp && true
};
console.log(isPalindrome(101));
console.log(isPalindrome(0));
console.log(isPalindrome(123));
