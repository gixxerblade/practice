let input = document.getElementById("pyramidInput");
let button = document.getElementById("button");
let pyramid = document.getElementById("pyramid");
let createPyramid = rows => {
  for (let i = 0; i < rows; i++) {
    var output = "";
    for (let j = 0; j < rows - i; j++) output += " ";
    for (let k = 0; k <= i; k++) output += "&#9652; ";
    pyramid.insertAdjacentHTML("beforeend", output + "\n");
  }
  return output;
};
button.addEventListener("click", () => {
  pyramid.innerHTML = "";
  createPyramid(input.value);
  input.value = "";
});
