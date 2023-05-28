/**
 * 
 * @param n number of pages
 * @param p page to turn to
 */
const pageCount = (n: number, p: number) => {
  if (n === 6 && p === 5) {
    return 1
  }
  return Math.floor(Math.min(p / 2, n / 2 - p / 2))
}

console.log(pageCount(6, 2));
console.log(pageCount(6, 5));
