//Given a string with multiple words, return the longest word.
const str = 'run,barn,yellow,barracuda,shark,fish,swim';
const str2 = 'fishes,sam,gollum,sauron,frodo,balrog';
const str3 = 'rUnNiNg ,swimming, eating,biking, climbing'
const longestWord = (str) => {
  const res = str
    .replace(/\s/g, '')
    .split(',')
    .sort((a, b) => b.length - a.length)
    .map((word, _, arr) => {
      const long = arr[0].length;
      if (word.length >= long) {
        return word.toLowerCase();
      }
    })
    .filter((word) => !!word)
    .join(',');
  return res;
};

console.log(longestWord(str));
console.log(longestWord(str2));
console.log(longestWord(str3));
/**
 * You'll get one input, a string with multiple words.
 * Return the longest word in the string.
 * If the input contains multiple words that are the largest length,
 * return a string that contains all of the words in the
 * same order they are provided. All returned strings
 * should be lowercase and trimmed of whitespace.
 */