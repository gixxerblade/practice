import { generatePrimes } from '../utils/utils';

const getRotations = (num: number): number[] => {
  const digits = String(num).split('');
  const rotations: number[] = [];

  for (let i = 0; i < digits.length; i++) {
    const rotation = [...digits.slice(i), ...digits.slice(0, i)].join('');
    rotations.push(Number(rotation));
  }

  return rotations;
};

const main = () => {
  const limit = 1_000_000;
  const primes = new Set(generatePrimes(limit));
  const circularPrimes = new Set<number>();
  
  for (const prime of primes) {
    if (circularPrimes.has(prime)) continue;

    const perms = getRotations(prime);
    if (perms.every(perm => primes.has(perm))) {
      perms.forEach(perm => circularPrimes.add(perm));
    }
  }
  return circularPrimes.size;
};

console.log(main());
