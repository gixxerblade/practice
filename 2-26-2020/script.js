let button = document.getElementById("btn");
let input = document.getElementById("pig-input");
let result = document.getElementById("result");
let digraphs = /\b(bl|br|ch|ck|cl|cr|dr|fl|fr|gh|gl|gr|ng|ph|pl|pr|qu|sc|sh|sk|sl|sm|sn|sp|st|sw|th|tr|tw|wh|wr)\w+/;
let vowels = /\b(a|e|i|o|u)\w+/;
let punctuation = /[,!@#$%^&*()\u9999]/;

let pigLatin = () => {
  result.innerHTML = "";
  let inputVal = input.value;
  inputVal.toLowerCase();
  if (digraphs.test(inputVal)) {
    let outcome = inputVal.split("");
    let diagraphLetters = outcome.splice(0, 2);
    result.innerHTML = `${outcome.join("")}${diagraphLetters.join("")}ay`;
  } else if (vowels.test(inputVal)) {
    result.innerHTML = `${inputVal}ay`;
  } else if (punctuation.test(inputVal))
    result.innerHTML = "Can't have punctuation";
  else {
    let outcome = inputVal.split("");
    let firstLetter = outcome.splice(0, 1);
    result.innerHTML = `${outcome.join("")}${firstLetter}ay`;
  }
  input.value = "";
};
button.addEventListener("click", pigLatin);

//^(bl|br|ch|ck|cl|cr|dr|fl|fr|gh|gl|gr|ng|ph.|pl.|pr.|qu|sc|sh|sk|sl|sm|sn|sp|st|sw|th|tr|tw|wh|wr){3,15}$
