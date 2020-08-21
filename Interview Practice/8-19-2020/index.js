//A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.
//
//We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)
//
//The rules of Goat Latin are as follows:
//
//If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
//For example, the word 'apple' becomes 'applema'.
//
//If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
//For example, the word "goat" becomes "oatgma".
//
//Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
//For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
//Return the final sentence representing the conversion from S to Goat Latin.
// Input: "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

let goatLatin = (str) => {
  let vowels = "aeiouAEIOU";
  let goatVowel = "ma";
  let a = "a";
  let arr = str.split(" ");
  let result = arr.map((el, i) => {
    if (vowels.indexOf(el[0]) !== -1) {
      return (el += goatVowel + a.repeat(i + 1));
    } else {
      let first = el.split("").shift();
      let rest = el.substring(1);
      return (rest += first + goatVowel + a.repeat(i + 1));
    }
  });
  return result.join(" ");
};
console.log(
  goatLatin("I speak Goat Latin"),
  "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
);


