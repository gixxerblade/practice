/* 
Write a JavaScript program to check if the provided argument is a valid JSON.

Input
console.log(isValidJSON('{"name":"Adam","age":20}'));
console.log(isValidJSON('{"name":"Adam",age:"20"}'));
console.log(isValidJSON(null));

Output
true
false
true

JSON Syntax Rules
Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays

*/

const isValidJSON = (string) => {
  try {
    JSON.parse(string);
  } catch (e) {
    return false;
  }
  return true;
};

console.log(isValidJSON('{"name":"Adam","age":20}'));
console.log(isValidJSON('{"name":"Adam",age:"20"}'));
console.log(isValidJSON(null));
