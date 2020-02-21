let input = document.getElementById("input");
let button = document.getElementById("button");
let output = document.getElementById("output");
let re = /^[\w,\s-]+\.[A-Za-z]{3}$/;
button.addEventListener("click", function() {
  let val = input.value;
  if (val == "") {
    output.innerText = "";
    output.innerText = "You must input a filename";
    input.value = "";
  } else if (re.test(val) == false) {
    output.innerText = "";
    output.innerText = "Not a valid filename";
    input.value = "";
  } else if (re.test(val)) {
    output.innerText = "";
    let result = val
      .split(".")
      .slice(1)
      .toString("");
    output.innerText = `.${result}`;
    input.value = "";
  }
  console.log(re.test(val));
});
