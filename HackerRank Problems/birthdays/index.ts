const birthday = (s: number[], d: number, m: number): number => {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    const arr = s.slice(i, m + i)
    const total = arr.reduce((a, b) => a + b)
    if (total === d) {
      count++
    }
  }
  return count
}

const s = [2, 2, 1, 3, 2], d = 4, m = 2
console.log(birthday(s, d, m))