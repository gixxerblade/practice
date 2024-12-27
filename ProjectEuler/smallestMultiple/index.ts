/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10
 * without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers 
 * from 1 to 20?
 */
function gcd(a: number, b: number): number {
  while (b !== 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

function findLCMForRange(start: number, end: number): number {
  let rangeLCM = start;
  for (let i = start + 1; i <= end; i++) {
    rangeLCM = lcm(rangeLCM, i);
  }
  return rangeLCM;
}

console.log(findLCMForRange(1, 20));
