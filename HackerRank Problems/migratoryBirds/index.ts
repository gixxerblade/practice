const migratoryBirds = (arr: number[]): number => {
  const map: Record<string, number> = {}
  arr.forEach((el) => {
    map[el] = map[el] + 1 || 1
  })
  const maxValue = Math.max(...Object.values(map))
  return +(Object.keys(map).find((val) => map[val] === maxValue))
}

console.log(migratoryBirds([1, 1, 2, 2, 3]))
