let button = document.getElementById("btn1");
let input = document.getElementById("temp-input");
let celOut = document.getElementById("toC");
let fahrOut = document.getElementById("toF");
let celsius = num => {
  let celsiusResult = ((num - 32) * 5) / 9;
  return celsiusResult;
};
let fahrenheit = num => {
  let fahrResult = num * (9 / 5) + 32;
  return fahrResult;
};

button.addEventListener("click", function() {
  if (input.value === "") return;
  else {
    celOut.innerHTML = "";
    fahrOut.innerHTML = "";
    celOut.innerHTML = `${input.value}&deg;F is ${celsius(input.value).toFixed(
      2
    )}&deg;C`;
    fahrOut.innerHTML = `${input.value}&deg;C is ${fahrenheit(
      input.value
    ).toFixed(2)}&deg;F`;
    input.value = "";
  }
});
