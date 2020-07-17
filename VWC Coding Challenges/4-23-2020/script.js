let button = document.getElementById("btn");
let input = document.getElementById("input");
let output = document.getElementById("output");
const URL = "yoda-api.appspot.com/api/v1/yodish?text=";
const CORS = "https://cors-anywhere.herokuapp.com/";
const yoda = async () => {
  let response = await fetch(`${CORS}${URL}${input.value}`, {
    method: "GET",
  });
  const data = await response.json();
  // console.log(data.yodish);
  output.innerHTML = `${data.yodish}`;
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  output.innerHTML = '';
  yoda();
  input.value = ''
});
