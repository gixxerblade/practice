/* 
Fermat's little theorem
If N is prime and A is any number such that 1<A< N, and if A^{N-1} \, mod \, N\ne1, then N is definitely composite and if A^{N-1} \, mod \, N=1 then N is very likely to be prime. 
*/

const listAllPrimes = (number) => {
  let primes = [2];
  for (let i = 2; i < number; i++) {
    let temp = Math.pow(2, i - 1);
    if (temp % i === 1) primes.push(i);
  }
  return primes.toString();
};
/* console.log(listAllPrimes(100));
console.log(listAllPrimes(1000));
console.log(listAllPrimes(1400));
console.log(listAllPrimes(10000)); 
*/

//Recursively check if each number is a prime
const isPrime = (number, step) => {
  if (step <= 1) return true;
  if (number % step === 0) {
    return false;
  }
  return isPrime(number, step - 1);
};

//Print primes
const morePrimes = (number) => {
  let arr = [];
  for (i = 1; i <= number; i++) {
    if (isPrime(i, i - 1)) {
      arr.push(i);
    }
  }
  let primes = arr.map((i) => {
    let j = i.toString(10).split("");
    if (j[j.length - 1] === "1") return j = "@";
    if (j[j.length - 1] === "2") return j = "@";
    if (j[j.length - 1] === "3") return j = "*";
    if (j[j.length - 1] === "7") return j = ".";
    if (j[j.length - 1] === "9") return j = "'";
  });
  return primes.join("");
  //return arr.filter((i) => i > 1).toString();
};

console.log(morePrimes(999999));
