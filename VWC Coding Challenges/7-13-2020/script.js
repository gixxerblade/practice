let button = document.getElementById("button");
let output = document.getElementById("output");
let input = document.getElementById("something");

button.addEventListener("click", (event) => {
  event.preventDefault();
  output.innerHTML = "";
  let value = input.value;

  output.innerHTML = getCode(value);
  input.value = "";
});

const getCode = (val) => {
  arr = [];
  for (let i = 0; i < val.length; i++) {
    arr.push(val.charCodeAt(i));
  }
  return (newArr = arr
    .map((char) => {
      return (random = getRandomLetter(char));
    })
    .join(""));
};

const getRandomLetter = (num) => {
  num = Math.floor(Math.random() * (122 - 65)) + 65;
  if (num >= 91 && num <= 96) getRandomLetter(num);
  else {
    return String.fromCharCode(num);
  }
};
