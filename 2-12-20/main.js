let num1 = document.getElementById("input1");
let num2 = document.getElementById("input2");
let numArr = [];
let answer;
let buttons = document.querySelector("#buttons");
let result = document.getElementById("result");
buttons.addEventListener(
  "click",
  e => {
    numArr.push(parseInt(num1.value));
    numArr.push(parseInt(num2.value));
    if (e.target.id == "add") {
      result.innerHTML = "";
      answer = numArr.reduce((a, b) => Number(a + b));
      result.innerHTML = answer;
      num1.value = "";
      num2.value = "";
      numArr = [];
    }
    if (e.target.id == "subtract") {
      result.innerHTML = "";
      answer = numArr.reduce((a, b) => Number(a - b));
      result.innerHTML = answer;
      num1.value = "";
      num2.value = "";
      numArr = [];
    }
    if (e.target.id == "multiply") {
      result.innerHTML = "";
      answer = numArr.reduce((a, b) => Number(a * b));
      result.innerHTML = answer;
      num1.value = "";
      num2.value = "";
      numArr = [];
    }
    if (e.target.id == "divide") {
      result.innerHTML = "";
      answer = numArr.reduce((a, b) => Number(a / b));
      result.innerHTML = answer;
      num1.value = "";
      num2.value = "";
      numArr = [];
    }
  },
  true
);
