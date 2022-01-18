//Write a JavaScript program to decapitalize all the first letters of a string.

let decapitalize = (s) => {
  let arr = s.split(" ");
  let res = arr.map((el) => {
    return el.charAt(0).toLowerCase() + el.substr(1);
  });
  return res.join(" ");
};
console.log(decapitalize("Hello Mr Lol"));

