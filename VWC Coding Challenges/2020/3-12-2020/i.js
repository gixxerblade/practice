/* here make a function that takes a character and returns a number. This number needs to be reliable so that u can referencable. Meaning if a == 25, u should be able to predict that 25 is a. Please come up with ur own numbering system without using ascii or utf8
 */
/* //238, 27, 163, 297, 116, 7, 108, 221, 224, 121, 295, 253, 19, 70, 288, 17, 208, 131, 237, 10, 105, 240, 39, 154, 222, 136
 */
/* //ABCDEFGHIJKLMNOPQRSTUVWXYZ
 */
let button = document.getElementById("btn");
let input = document.getElementById("inputNumber");
let output = document.getElementById("printResult");
let charToNum = character => {
  output.innerHTML = "";
  character = input.value;
  if (character === "") output.innerHTML = "You must enter a letter";
  if (typeof character === typeof "number")
    output.innerHTML = "Numbers are not allowed!";
  let charUpper = character.toUpperCase();
  let keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let values = "238,27,163,297,116,7,108,221,224,121,295,253,19,70,288,17,208,131,237,10,105,240,39,154,222,136".split(
    ","
  );
  let result = Object.assign(...keys.map((k, i) => ({ [k]: values[i] })));
  Object.entries(result).map(([key, val]) => {
    if (charUpper === key) output.innerHTML = val;
  });
  input.value = "";
};

button.addEventListener("click", charToNum);
