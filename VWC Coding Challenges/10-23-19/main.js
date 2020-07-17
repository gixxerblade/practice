//1. Grab info from document
//2. validate whether a number
//3. function to Generate a random number between 1 - 100
//4. check whether guess was correct - if not
//4a. count guesses
//4b. display guesses
//5. If guessed correctly winner message
//6. would you like to play again? reset game...

//Create random number
const rndNum = Math.floor(Math.random() * 100) + 1;
console.log(rndNum);
let count;
let guess = document.getElementById("inputGuess");
let message = document.getElementById("message");
let lastGuess = document.getElementById("lastGuess");

const checkNumber = () => {
  let userGuess = guess.value;
  if (guess === 1) {
    lastGuess.innerText = "Last guesses: ";
  }
  lastGuess.innerText += " " + userGuess + ", ";
  if (userGuess == rndNum) {
    count++;
    message.innerText = "You win!!";
    resetShow();
  } else if (userGuess > rndNum) {
    count++;
    message.innerText = "You guessed too high!";
  } else if (userGuess < rndNum) {
    count++;
    message.innerText = "You guessed too low!";
  }
  if (count === 3){
      message.innerText = `GAME OVER. It took you ${userGuess}.`;
      reset();
  }
};

const resetShow = () => {
  let resetBtn = document.getElementById("resetBtn");
  resetBtn.setAttribute("style", "display: initial;");
  document.getElementById("btn").disabled = true;
};
const reset = () =>{
    resetBtn.setAttribute("style", "display: none;");
    count = 0;
    const resetDiv = document.querySelectorAll('.reset');
    for (let i = 0 ; i < resetDiv.length ; i++) {
        resetDiv[i].textContent = '';
      }

}
//Event listener to create action after button is pressed.
document.getElementById("btn").addEventListener("click", checkNumber);
document.getElementById("resetBtn").addEventListener("click", reset);
