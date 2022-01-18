// Write a JavaScript program to convert the length of a given string in bytes.
let str2BytesLen = (str) => {
  let res = [];
  let num = str.length.toString().split()
  while (num > 1) {
    let rem = num % 2;
    res.unshift(Math.floor(rem));
    num /= 2;
  }
  return +res.join("");
};
console.log(str2BytesLen("Hello, World"), 1100);
console.log(str2BytesLen("Supercalifragilisticexpialidociousd"), 100011);

