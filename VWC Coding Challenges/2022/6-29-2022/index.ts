const isProbablyPrime = (n: number): boolean => {
    // Corner case
    if (n <= 1)
        return false;
  
    // Check from 2 to square root of n-1
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i == 0)
        return false;
    }
    return true;
}
console.log(isProbablyPrime(7919));
console.log(isProbablyPrime(27644437));
console.log(isProbablyPrime(11));
console.log(isProbablyPrime(17));
console.log(isProbablyPrime(8));
console.log(isProbablyPrime(12));
