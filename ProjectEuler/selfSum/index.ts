function solve () {
  const mod = BigInt(10 ** 10)
  let total = BigInt(0)
  for(let i = 1; i <= 1000; i++) {
    const selfPower = BigInt(i) ** BigInt(i) % mod
    total = (total + selfPower) % mod
  }
  return total.toString()
}

console.log(solve())