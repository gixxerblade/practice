const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let largest;

switch (true) {
  case num1 >= num2 && num1 >= num3:
    largest = num1
    break;
  case num2 >= num1 && num2 >= num3:
    largest = num2
    break;
  default:
    largest = num3
    break;
}
// display the result
console.log("The largest number is " + largest);
