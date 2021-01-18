const vowel_count = (str: string): number | string => {
  let vowels = str.match(/[aeiou]/g);
  if (typeof String && vowels !== null) {
    let vowelsLen = vowels.length;
    if (vowels) {
      return vowelsLen;
    }
  }
  return "No vowels";
};

console.log(vowel_count("The quick brown fox jumps over the lazy dog"));
console.log(vowel_count("swr"));
