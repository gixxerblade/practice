/* 
let button = document.getElementById("btn");
let index = 0;
let count = () => {
  button.innerHTML = index++;
};
button.addEventListener("click", count);
console.log(index);
 */

/* 
function primeCount(n) {
  let result = [];

  for (let i = 2; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {result.push(i);
    //console.log(i);
    }
  }
  let final = result.reduce((a, c)=> a+c)
  console.log(final)
}
console.log(primeCount(1000));
 */
/* function Fibonacci(n) {
  const PHI = (Math.sqrt(5) + 1) / 2;
  const sq5 = Math.sqrt(5);
  return (Math.pow(PHI, n) - (Math.pow(-1*PHI, -1*n)))/sq5
}
console.log(Fibonacci(3999999));
 */
/* function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
let product3Digits = () => {
  let result = [];
  let product = 0;
  let reverse = 0;
  for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
      product = j * i;

      if (product % 10 == 0) {
        continue;
      } else {
        reverse = reverse_a_number(product)
        if(reverse == product && product > 900000)
        console.log(reverse, product);
      }
    }
  }
};
product3Digits(); */
/* 
let sumOfSquares = ()=>{
  let squares = 0;
  let num = []
  let squaresArr = []
  for (let i = 0; i < 101; i++) {
    squares = Math.pow(i, 2);
    num.push(i)
    squaresArr.push(squares)
  }
   squareSum = num.reduce((a,c) => a+c)
  result = squaresArr.reduce((a,c)=>a+c)
    console.log(result)
    squareSum = Math.pow(squareSum, 2)
    console.log(squareSum-result)
}
sumOfSquares()
 */
/* 
const primes = [ 2, 3 ];
function isPrime(n) {
  return primes.every(d => n % d > 0);
}

let i = 1;
while (primes.length < 10001) {
  const n = i * 3 + 1.5 + .5 * (-1) ** (i + 1);
  if (isPrime(n)) primes.push(n);
  i++;
}
console.log(primes[10000]); 
 */
/* let adjacent =
  "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
let productOf13 = arr => {
  let strArr = adjacent.toString().split("");
  //console.log(strArr)
  let thirteen = [];
  let totalArr = [];
  for (let i = 0; i < strArr.length - 13; i++) {
    thirteen = strArr.slice(i, 13 + i);
    let total = thirteen.reduce((a, c) => a * c);
    if (total > 0) totalArr.push(total);
  }
  console.log(Math.max(...totalArr));
};
productOf13(adjacent);
 */

/* let pythagorean = () => {
  let a;
  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
      if (
        Math.floor(Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2))) ===
          Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2)) &&
        Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2)) !== Infinity
      ) {
        if (i<j) {
          a = Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2));
          if (j<a) {
            if(a+j+i==1000)
            console.log(a*j*i);
          }
        }
      }
    }
  }
};
pythagorean();

 */
/* const s4 = () => {
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  return s4() + s4() + "-" + s4();
};

console.log(s4()); */

/* 
We all know there are built in methods for arrays in JS like .reverse() and .pop(). Make your own method called .average() in that any array can call it as it we’re a built in method in JS (but obviously just for your file/program).
Hint: Prototype inheritance 

So to test you would be able to:

Let numbers = [1,2,3,4,5,6]

console.log(numbers.average())   //3.3333
*/
/* Array.prototype.average = function() {
  return this.reduce((a, b) => a + b) / this.length;
};
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.average());
 */ //console.log(numbers.reduce((a,b)=>(a+b))/numbers.length)

/* 
JS Problem:
*Send me the answer directly in Slack
Create a function that takes one or more number(s) as an argument and returns the sum of the numbers. So if your function is sum() I should be able to call it with any amount of numbers so examples:

sum(1,2)
or
sum(1,2,3,4,5,6,7,8,9,10, 1000, 45,67,761,2,3,4,5,6,7,8,9,10, 1000, 45,67,761,2,3,4,5,6,7,8,9,10, 1000, 45,67,761,2,3,4,5,6,7,8,9,10, 1000, 45,67,76)
*/
/* function sum() {
  let newNum = Array.from(arguments);
  return newNum.reduce((a,b)=>a+b)
}
console.log(sum(1,2,3,4,5,6,7,8,9,10, 1000, 45,67,761,2,3,4,5,6,7,8,9,10, 1000, 45,67,761,2,3,4,5,6,7,8,9,10, 1000, 45,67,761,2,3,4,5,6,7,8,9,10, 1000, 45,67,76));
 */

/* 
 Write a new function that takes in an array and returns a random element from that array.

 */

let branches = ["Air Force", "Navy", "Marines", "Army", "Coast Guard"];

let pickRandom = arr => {
  return Array.isArray(arr)
    ? (arr[Math.floor(Math.random() * arr.length)])
    : ("Not an array.");
};

console.log(pickRandom(branches)); // returns or console.logs random branch
