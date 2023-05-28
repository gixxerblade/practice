const sockMerchant = (n: number, ar: number[]): number => {
  const obj: Record<number, number> = {}
  ar.forEach((val) => obj[val] = obj[val] + 1 || 1)
  return Object.values(obj).map((val) => obj[val] = Math.floor(val / 2))
    .reduce((a, b) => a + b)
}

const testCase1 = { n: 10, ar: [1, 1, 3, 1, 2, 1, 3, 3, 3, 3] }
const testCase2 = { n: 9, ar: [10, 20, 20, 10, 10, 30, 50, 10, 20] }
console.log(sockMerchant(testCase1.n, testCase1.ar))
console.log(sockMerchant(testCase2.n, testCase2.ar))