let input = document.getElementById("input");
let button = document.getElementById("btn");
let result = document.getElementById("result");

let rando = num => {
  var array = new Uint32Array(num);
  window.crypto.getRandomValues(array);
  for (var i = 0; i < array.length; i++) {
    let el = document.createElement("div");
    let list = document.createTextNode(array[i]);
    el.appendChild(list);
    result.appendChild(el);
  }
};
button.addEventListener("click", () => {
  result.innerHTML = "";
  rando(input.value);
  input.value = "";
});
