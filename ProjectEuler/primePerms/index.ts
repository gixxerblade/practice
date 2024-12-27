import { getPermutations, isPrime } from '../utils/utils';

function solve() {
  for (let i = 1000; i <= 9999; i++) {
    if (!isPrime(i)) continue;
    const primePerms = Array.from(
      new Set(
        getPermutations(i)
          .filter(num => num >= 1000 && isPrime(num))
          .sort((a, b) => a - b)
      )
    );
    const triplets = findArithmeticTriplets(primePerms);
    if (triplets.length > 0) {
      for (const [a, b, c] of triplets) {
        console.log(`${a}${b}${c}`)
      }
    }
  }
}

function findArithmeticTriplets(primes: number[]): [number, number, number][] {
  const result: [number, number, number][] = [];

  primes.sort((a, b) => a - b);

  for (let i = 0; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      const diff = primes[j] - primes[i];
      const thirdNumber = primes[j] + diff;

      if (primes.includes(thirdNumber)) {
        result.push([primes[i], primes[j], thirdNumber]);
      }
    }
  }

  return result;
}

solve();
