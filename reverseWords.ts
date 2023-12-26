// Prompt:
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters.
// The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// s may contain leading or trailing spaces and/or extra spaces between words

const reverseWords = (s: string) => {
  return s.trim().split(/\s+/).reverse().join(' ');
}

console.log(reverseWords("the sky is blue")); //-> "blue is sky the"
console.log(reverseWords("  hello world  ")); //-> "world hello"
console.log(reverseWords("a good   example")); //-> "example good a"

// Given a string s, reverse the order of characters in each word within a sentence while still
// preserving whitespace and initial word order.

const reverseWordsII = (s: string) => {
  return s.split(/\s+/)
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

console.log(reverseWordsII("the sky is blue")); //-> "blue is sky the"
