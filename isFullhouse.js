/**
 * Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.
 ç
 * Expected output: true
 ç
 * Expected output: false
 ç
 * Expected output: false
 ç
 * Expected output: true
 */


const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

const isFullHouse = (hand) => {
  const obj = {}
  hand.forEach((card) => {
    obj[card] = obj[card] + 1 || 1
  })
  const result = Object.values(obj)
  return result.includes(2)
    && result.length === 2;
}

console.log(isFullHouse(hand1))
console.log(isFullHouse(hand2))
console.log(isFullHouse(hand3))
console.log(isFullHouse(hand4))