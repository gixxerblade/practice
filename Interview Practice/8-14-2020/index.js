console.log("Hello world!");

const fibbonacci = (num) => {
  if (num == 0) return 0;
  if (num == 1) return 1;
  else return fibbonacci(num - 1) + fibbonacci(num - 2);
};

console.log(fibbonacci(10), 55); // 55

// reverse a given string
// reverse('abcd') → 'dcba'
function reverseString(s) {
  let reversed = [];
  let arr = s.split("");
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed.join("");
}
console.log(reverseString("abcd"), "dcba");

let rev = (s) => {
  return `\u202E${s}`;  
};
console.log(rev("abcde"), "edcba");

// I want my dog to bark(), but instead I get an error. Why?
function Dog(name) {
  this.name = name;
}
// Need prototype but why?
Dog.prototype.bark = function () {
  console.log(this.name + " says woof");
};

let fido = new Dog("fido");
fido.bark();

let j = "global let";

let letFunc = () => {
  return (j = 4);
};
function letFunc2() {
  j = 4;
  return j;
}
console.log(j, "global yet"); // should return global let
console.log(letFunc(), 4); //should return 4
console.log(letFunc2());


