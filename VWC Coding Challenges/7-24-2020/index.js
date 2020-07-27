/* 
@here make a function that takes an array of strings and returns a single string where you take each character in the same position and put it one after the other. (I honestly have no idea how to explain this. U will get a taco for writing a better explanation)
Example
stringConcat(['hi', 'there', 'apple']) => 'htaihpeprlee'

'hi' 
'there'
'apple'

[0][0][1][0][2][0][0][1]
*/

let stringConcat = (arr) => {
  let longest = [...arr].sort((a, b) => b.length - a.length)[0];
  let empty = "";
  for (let i = 0; i < longest.length; i++) {
    arr.map((el) => (empty += el.charAt(i)));
  }
  return empty;
};

console.log(stringConcat(["hi", "there", "apple"]));
