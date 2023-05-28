const bonAppetit = (bill: number[], k: number, b: number): void => {
  let total = bill.reduce((a, b) => a + b, 0)
  total = (total - bill[k]) / 2
  if (total - b === 0) {
    console.log('Bon Appetit')
  } else {
    console.log(b - total)
  }
}
const bill = [2, 4, 6]
const k = 2
const b = 6

console.log(bonAppetit(bill, k, b));