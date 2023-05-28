
const summingSeries = (num: number) => {
  const limit = 1000000007n
  const nn = BigInt(num)
  return nn*nn%limit
}

console.log(summingSeries(3))