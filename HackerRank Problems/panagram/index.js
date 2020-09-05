let pangram = (s) => {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let re = /\s/g;
  let lower = s.toLowerCase().replace(re, "");
  for (let i = 0; i < letters.length; i++) {
    if (lower.indexOf(letters[i]) === -1) {
      return "not pangram";
    }
  }
  return "pangram";
};

console.log(
  pangram("We promptly judged antique ivory buckles for the next prize")
);
console.log(pangram("We promptly judged antique ivory buckles for the prize"));


// GENIUS MOVE HERE
let pangrams = (s) => {
  return new Set(s.toLowerCase()).size > 26 ? "pangram" : "not pangram"
};

console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));
console.log(
  pangrams("We promptly judged antique ivory buckles for the prize")
);
