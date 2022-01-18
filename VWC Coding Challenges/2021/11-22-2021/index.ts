/**
 * Write a JavaScript program to count number of words in string.
 * @Input
 * console.log(count_words(' The quick brown fox jumps over the lazy dog.'));
 * @Output
 * 9
 */

const count_words = (str: string): number => {
return str.trim().replace(/\s+/g, ' ').split(' ').length
}

console.log(count_words(' The quick brown fox jumps over the lazy      dog.     '));