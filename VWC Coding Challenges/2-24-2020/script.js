let input = document.getElementById("numInput");
let button = document.getElementById("btn");
let problem = document.querySelector(".problem");
let answer = document.querySelector(".answer");

let under = val => {
  return 15 - val;
};
let handleInput = () => {
  let val = input.value;
  if (val == "") {
    problem.innerHTML = "";
    answer.innerHTML = "";
    problem.innerHTML = "🤣😂";
    answer.innerHTML = "You haven't entered anything!";
    input.value = "";
  } else if (val < 15) {
    problem.innerHTML = "";
    answer.innerHTML = "";
    if (val < 0) {
      problem.innerHTML = `15 - (${val})`;
    }
    if (val > 0) {
      problem.innerHTML = "15 - " + val;
    } 
    answer.innerHTML = 15 - val;
    input.value = "";
  } else if (val >= 15) {
    problem.innerHTML = "";
    answer.innerHTML = "";
    problem.innerHTML = "2 x (" + val + " - 15)";
    answer.innerHTML = 2 * (val - 15);
    input.value = "";
  }
};

button.addEventListener("click", handleInput);
