let ingredients = document.getElementById("ingredients");
let button = document.getElementById("btn");
const cors = "https://yacdn.org/proxy/";
const url = "http://www.recipepuppy.com/api/?";
const page = "&p=1";

let resultTitle = document.getElementById("resultTitle");
let resultIngredients = document.getElementById("resultIngredients");
let resultPic = document.getElementById("resultPic");
let resultURL = document.getElementById("resultURL");
const getRecipe = async () => {
  if (ingredients.value) {
    resultTitle.innerHTML = "";
    resultIngredients.innerHTML = "";
    resultPic.src = "";
    resultURL.innerHTML = "";
    let i = `i=${ingredients.value.replace(/ /g, "")}`;
    const response = await fetch(`${cors}${url}${i}${page}`, {});
    const data = await response.json();
    console.log(data.results, i);
    if (data.results) {
      data.results.map(recipe => {
        resultTitle.innerHTML = recipe.title;
        resultIngredients.innerHTML = recipe.ingredients;
        resultPic.src = recipe.thumbnail;
        resultURL.innerHTML = `${url}${i}${page}`;
      });
    } else {
      resultTitle.innerHTML = `A recipe for ${ingredients.value} does not exist`;
    }
    ingredients.value = "";
  } else resultTitle.innerHTML = "You must enter something";
};

button.addEventListener("click", getRecipe);
