/**
 * Write a JavaScript program to count number of words in string.
 * Input
 * console.log(count_words(' The quick brown fox jumps over the lazy dog.'));
 * Output
 * 9
 */

const count_words = (string: string): number => string.trim().split(' ').length
console.log(count_words(' The quick brown fox jumps over the lazy dog.'));