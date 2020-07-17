/* 
Create a program that takes input from a user and returns a greeting with the user's name in it. 
Extra, create different greetings for different users but make it consistent. 
So if @bphogan enters his name he'll always get answered with the same greeting. 
Where if @semperfried76 enters his name he'll get a different greeting.
*/

const greetings = [
  "Welcome to the thunderdome",
  "Howdy",
  "What’s kickin",
  "Howdy-doody",
  "Hey there",
  "Ahoy",
  "What’s crackin",
  "Sup, homeslice",
  "Here's",
  "Whaddup",
  "Greetings and salutations",
  "Under his eye",
];

let nameElement = document.getElementById("name");
let button = document.getElementById("btn");

// Get random greeting from array above
let getGreeting = (greeting) => {
  return (greet = greeting[Math.floor(Math.random() * greetings.length)]);
};

// Set the object
let nameAndGreeting = [];
// Set local storage
localStorage.setItem("nameAndGreeting", JSON.stringify(nameAndGreeting));

let nameAndGreetingObj = JSON.parse(localStorage.getItem("nameAndGreeting"));
//console.log(nameAndGreetingObj);
button.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents reloading of window object
  let greetElement = document.getElementById("greeting");
  greetElement.innerHTML = "";

  // Look for the input value
  let searchObj = nameAndGreeting.find(
    ({ name }) => name === nameElement.value
  );
  console.log(searchObj);
  // If input empty validation
  if (nameElement.value === "") {
    greetElement.innerText = "What's you name again?";
  }
  // If the input value doesn't match anything we have so far
  else if (!searchObj) {
    let newGreeting = getGreeting(greetings);
    //let existingLocalObj = JSON.parse(localStorage.getItem("nameAndGreeting"));
    nameAndGreeting.push({
      name: nameElement.value,
      greeting: newGreeting,
    });
    
    localStorage.setItem("nameAndGreeting", JSON.stringify(nameAndGreeting));
    greetElement.innerText = `${newGreeting} ${nameElement.value}!!`;
  } else if (searchObj) {
    let { name, greeting } = searchObj;
    console.log(searchObj);
    greetElement.innerText = `${greeting} ${name}!!`;
  }
  nameElement.value = "";
});
