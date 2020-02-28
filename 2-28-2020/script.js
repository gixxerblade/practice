let button = document.getElementById("btn");
let input = document.getElementById("wordinput");
let result = document.getElementById("result");
let outcome = [];
let swapLetters = () => {
  if (input.value === "") result.innerHTML = "You must enter a word.";
  else {
    result.innerHTML = "";
    let val = input.value;
    let valArr = val.split("");
    let first = valArr.splice(0, 1);
    let last = valArr.splice(-1, 1);
    result.innerHTML = outcome = [last, ...valArr, first].join("");
    input.value = "";
  }
};

button.addEventListener("click", swapLetters);
