const inquirer = require("inquirer");
const figlet = require("figlet");

console.log(figlet.textSync("FlIpCaSe"))
console.log(`This app takes a character and flips the casing of all its occurrences in a string.\n
For example if given 'fox rox' and 'x' the return would be 'foX roX'\n`)

let questions = [
  {
    type: "input",
    name: "str",
    message: "Input a string",
  },
  {
    type: "input",
    name: "letter",
    message: "Input a letter",
  },
];

inquirer.prompt(questions).then((answers) => {
  //const flipCAse = (str, letter) => {
  let strArray = [];
  strArray = answers["str"].split("");
  console.log(
    `String Inputted: ${answers["str"]} \nLetter Inputted: ${answers["letter"]}`
  );
  let res = strArray.map((letterToFind) => {
    if (letterToFind === answers["letter"]) {
      return letterToFind === letterToFind.toUpperCase
        ? letterToFind.toLowerCase()
        : letterToFind.toUpperCase();
    } else return letterToFind;
  });
  console.log("Letter case: ", res.join("").toString());
});

