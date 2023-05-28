
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

const breakingRecords = <T extends number>(scores: T[]): number[] => {
  let maxScore = scores[0];
  let minScore = scores[0]
  const recordsCount: number[] = []
  const highestCount = scores.filter((score) => {
    let count = 0
    if (score > maxScore) {
      count++
      maxScore = score
    }
    return count > 0 && count
  }).length
  recordsCount.push(highestCount)
  const lowestCount = scores.filter((score) => {
    let count = 0
    if (score < minScore) {
      count++
      minScore = score
    }
    return count
  }).length
  recordsCount.push(lowestCount)
  return recordsCount
}

console.log(breakingRecords(scores))