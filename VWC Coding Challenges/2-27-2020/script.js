let button = document.getElementById("btn");
let input1 = document.getElementById("inputWord1");
let input2 = document.getElementById("inputWord2");
let result = document.getElementById("result");

let zipWords = () => {
  result.innerHTML = "";
  let val1 = input1.value;
  let val2 = input2.value;
  if (val1 == "" || val2 == "") {
    result.innerHTML = "You must enter a word in both fields! 😂🤣";
    input1.value = "";
    input2.value = "";
  } else {
    let arrVal1 = val1.split("");
    let arrVal2 = val2.split("");
    let arr = [];
    for (var i = 0; i < arrVal1.length; i++) {
      arr.push(arrVal1[i]);
      arr.push(arrVal2[i]);
    }
    result.innerHTML = arr.join("");
    input1.value = "";
    input2.value = "";
  }
};

button.addEventListener("click", zipWords);
