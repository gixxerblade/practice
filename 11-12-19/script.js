/* Create a function that checks whether or not a string is a palindrome.
examples of palindromes:
taco cat
Racecar
Radar
Redder
Refer
Repaper
Rotator */

let button = document.getElementById("btn");
let output = document.getElementById("output");
let palinCheck = () => {
  //palindrome input to a string
  let palindrome = document.getElementById("input-text").value;
  palindromeStripped = palindrome.replace(/\s+/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
  let palindromeString = palindromeStripped.split("");
  //Make palindrome an array then reverse it.
  let palindromeToReverseArray = palindromeString.reverse();
  //If the palindrome has a space in it, this function removes it.
  let reverseArrLessSpaces = palindromeToReverseArray.filter(function(e) {
    return e !== " ";
  });

  //Takes the array without empty elements then joins it to a new string.
  let newReverseString = reverseArrLessSpaces.join("");
  let palindromeToArr = Array.from(palindromeStripped);
  let palindromeToArrLessSpaces = palindromeToArr.filter(function(e) {
    return e !== " ";
  });
  let newString = palindromeToArrLessSpaces.join("");
  if (palindrome.length == 0){output.appendChild(document.createTextNode(`You did not enter a palindrome`))}
  else if (newString == newReverseString) {
    output.innerText = "";
    output.appendChild(
      document.createTextNode(`${palindrome} is a palindrome`)
    );
    palindrome.value = null;
  } else{
    output.innerText ="";

    output.appendChild(
      document.createTextNode(`${palindrome} is not a palindrome`)
    );
    palindrome.value = null;

  }
};
/* palindrome.addEventListener('input', palinCheck);
 */
button.addEventListener("click", palinCheck);
