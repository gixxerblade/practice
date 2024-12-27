import { getFactors } from '../utils/utils';

const amicableNumbers = () => {
  const map: Record<number, number> = {};
  const amicableNumberList = new Set<number>();
  for (let i = 1; i < 10000; i++) {
    const divisors = getFactors(i);
    const properDivisors = divisors.filter(num => num < i).reduce((a, b) => a + b, 0);
    map[i] = properDivisors;
  }
  Object.entries(map).forEach(([key, sum]) => {
    /**
     * { 220: 284 }, { 284: 220 }
     */
    const partner = map[sum];
    const originalNumber = parseInt(key);
    
    // Check for amicable condition and ensure not to add the same pair twice
    if (partner === originalNumber && originalNumber !== sum && !amicableNumberList.has(originalNumber)) {
      amicableNumberList.add(originalNumber);
      amicableNumberList.add(sum);
    }
  });
  return [...amicableNumberList].reduce((a, b) => a + b, 0);
};
console.log(amicableNumbers());
