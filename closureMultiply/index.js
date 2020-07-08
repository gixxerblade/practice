//Write a function that multiplies two numbers in using this format, multiply(3)(6)
let multiply = (num1) => {
  return (num2) => {
    return num1 * num2;
  };
};
//chain of function scopes

console.log(multiply(3)(6));
