export function getFactors(n: number): number[] {
  const factors = new Set<number>();
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.add(i);
      factors.add(n / i);
    }
  }
  return Array.from(factors).sort((a, b) => a - b);
}

export const getProperDivisors = (n:number) => {
  const divisors = getFactors(n);
  return divisors.filter((num) => num < n);
}

export const recurseFact = (num: number): number => {
  if (num === 0 || num === 1) return 1;
  return num * recurseFact(num - 1);
};

export function mf(index: number, cache: number[] = []) {
  if (cache[index]) {
     return cache[index] 
  }
  else {
     if (index < 3) return 1
     else {
        cache[index] = mf(index - 1, cache) + mf(index - 2, cache)
     }
  }
  return cache[index];
}

export function bigMf(index: number, cache: Map<number, bigint> = new Map()): bigint {
  if (cache.has(index)) {
    return cache.get(index)!;
  }

  if (index < 3) {
    return BigInt(1);
  }

  const result = bigMf(index - 1, cache) + bigMf(index - 2, cache);
  cache.set(index, result);
  return result;
}

export const getDigits = (num: number): number[] => {
  const digits: number[] = [];
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  return digits;
};

export const getPermutations = (num: number): number[] => {
  const digits = String(num).split(''); // Convert the number to an array of digits

  const generatePermutations = (arr: string[], prefix: string[] = []): string[] => {
    if (arr.length === 0) return [prefix.join('')]; // Base case: no digits left
    const result: string[] = [];

    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const remaining = arr.slice(0, i).concat(arr.slice(i + 1)); // Remove current digit
      result.push(...generatePermutations(remaining, [...prefix, current]));
    }

    return result;
  };

  // Generate permutations and convert them to numbers
  const permutations = generatePermutations(digits).map(perm => Number(perm));

  // Remove duplicates (if the number has repeating digits)
  return Array.from(new Set(permutations));
};

export const generatePrimes = (limit: number): number[] => {
  const sieve = Array(limit).fill(true);
  sieve[0] = sieve[1] = false; // 0 and 1 are not prime

  for (let i = 2; i * i < limit; i++) {
    if (sieve[i]) {
      for (let j = i * i; j < limit; j += i) {
        sieve[j] = false;
      }
    }
  }

  return sieve.map((isPrime, idx) => (isPrime ? idx : 0)).filter(num => num > 0);
};

export function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}