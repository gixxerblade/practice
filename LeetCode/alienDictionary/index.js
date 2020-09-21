/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 * Make this work with an object.
 */

let words = ["hello", "leetcode"],
  order = "hlabcdefgijkmnopqrstuvwxyz";
var isAlienSorted = function (words, order) {
  let i = 0;
  while (i < words.length - 1) {
    if (!compareTwo(words[i], words[i + 1], order)) return false;
    i++;
  }
  return true;
};
/**
Reverse the order to make first index the last to give it a higher index #

*/

let compareTwo = (word1, word2, order) => {
  let i = 0;
  let lookup = {};
  for (let i in order) {
    lookup[order[i]] = i;
  }
  while (i < word1.length) {
    if (i > word2.length - 1) return false;
    if (lookup[word1[i]] < lookup[word2[i]]) {
      return true;
    } else if (lookup[word1[i]] === lookup[word2[i]]) i++;
    else return false;
  }
  return true;
};
console.log(isAlienSorted(words, order));

var isAlienSorted1 = function (words, order) {
  let i = 0;
  let lookup = {};
  for (let i in order) {
    lookup[order[i]] = i;
  }
  while (i < words.length - 1) {
    if (!compareTwo(words[i], words[i + 1], order)) return false;
    i++;
  }
  return true;
};

let compareTwo = (word1, word2, order) => {
  let i = 0;

  while (i < word1.length) {
    if (i > word2.length - 1) return false;
    if (order.indexOf(word1[i]) < order.indexOf(word2[i])) {
      return true;
    } else if (order.indexOf(word1[i]) === order.indexOf(word2[i])) i++;
    else return false;
  }
  return true;
};
