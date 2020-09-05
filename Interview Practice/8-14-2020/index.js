console.log("Hello world!");

const fibbonacci = (num) => {
  if (num == 0) return 0;
  if (num == 1) return 1;
  else return fibbonacci(num - 1) + fibbonacci(num - 2);
};

console.log(fibbonacci(10), 55); // 55

let fib = (num) => {
  let result = 0;
  for (let i = num - 1; i > 0; i--) {
    num--;
    num = num - i + num - 2;
  }
  return num;
};
console.log(fib(10), 55);
//factorial num! = num * num -1 * num - 2 * num - 3...etc

//closure way => hard
let factorial = (num) => {
  let iterate = (i, fact) => {
    if (i === 0) {
      return fact;
    } else {
      return iterate(i - 1, i * fact);
    }
  };
  return iterate(num, 1);
};

// recursive way

let recurseFact = (num) => {
  if (num === 0 || num === 1) return 1;
  return num * recurseFact(num - 1);
};

let anotherFact = (num) => {
  let result = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
};

let forFact = (num) => {
  for (let i = num - 1; i > 0; i--) {
    num *= i;
  }
  return num;
};

console.log("Factorial: ", factorial(6));
console.log("Factorial: ", anotherFact(6));
console.log("Factorial: ", forFact(6));
console.log("Factorial: ", recurseFact(6));

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

console.log(h); //undefined
var h = "hoisted";

let letFunc = () => {
  return (j = 4);
};
function letFunc2() {
  j = 4;
  return j;
}
console.log(j, "global yet"); // should return global let
console.log(letFunc(), 4); //should return 4
console.log(letFunc2(), 4);

/* let a = (n) =>{
  console.log(n);
}
a(b)
a(c)
var c = 10
let b = 10
 */
let list = [1, 2, 3, 4, 5, 6];
list.length = 0;
console.log(list);
