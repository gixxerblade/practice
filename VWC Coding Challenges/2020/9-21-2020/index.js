const isPrime = (number) => {
    // Take the floored square root of the number 
    // and check every result against the number
    // If an integer it will not be a prime
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    return `Is ${number} a prime? ${!((number / i) % 1 === 0)}`;
  }
  return `Is ${number} a prime? ${false}`;
};

console.log(isPrime(11));
console.log(isPrime(237));
console.log(isPrime(31));
console.log(isPrime(12));
console.log(isPrime(22));
console.log(isPrime(191));

