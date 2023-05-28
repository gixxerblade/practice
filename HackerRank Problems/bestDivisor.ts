const getDivisors = (n: number): number[] => {
  const divisors: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i)    
    }
  }
  return divisors
}

const bestDivisor = (n: number): number => {
  const divisors = getDivisors(n);
  let highest = 0
  if (divisors.length === 2) {
    return divisors[1]
  }
  divisors.map((num) => {
      let sum = 0
      while (num) {
        sum += num % 10        
        num = Math.floor(num / 10)
      }
      if (sum > highest) {
        highest = sum
      }
    return sum
  })
  return highest
}

console.log(bestDivisor(198))