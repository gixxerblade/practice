const fs = require("fs");

const lines = fs.readFileSync('./input.txt', { encoding: 'utf-8' })
  .split('\n\n')
  .filter((item) => Boolean(item))
  .map((item) => item.replace(/[\n ,]+/g, ' ')
    .trim()
    .split(' ')
    .map(Number))

const [choices, ...rawCards] = lines

class Card {
  SIDE_SIZE = 5
  rows = Array(this.SIDE_SIZE).fill(0)
  columns = Array(this.SIDE_SIZE).fill(0)
  isComplete = false
  marked = new Set()
  numberToPosition = new Map()
  constructor(numbers) {
    this.numbers = numbers
    this.numbers.forEach((number, index) => {
      this.numberToPosition.set(number, {
        row: Math.floor(index / this.SIDE_SIZE),
        column: index % this.SIDE_SIZE,
      })
    })
  }

  addWinningNumbers() {
    const unmarked = this.numbers.filter((number) => !this.marked.has(number))
    return unmarked.reduce((a, b) => a + b)
  }

  markNumber(number) {
    const position = this.numberToPosition.get(number)
    if (!position) {
      return
    }
    this.marked.add(number)
    this.rows[position.row]++
    this.columns[position.column]++
    if (this.rows[position.row] === this.SIDE_SIZE
      || this.columns[position.column] === this.SIDE_SIZE) {
      this.isComplete = true;
    }
  }

  // santity check
  showNumberToPosition() {
    return this.numberToPosition.forEach((_pos, i) => {
      console.log(i, this.numberToPosition.get(i))
    })
  }
}

const part1 = (choices, cardsToProcess) => {
  let cards = cardsToProcess.map((card) => new Card(card))
  const drawnNumbers = []
  let winningCard;
  for (const choice of choices) {
    let finished = false
    drawnNumbers.push(choice)
    for (const card of cards) {
      card.markNumber(choice)
      if (card.isComplete) {
        finished = card.isComplete
        winningCard = card
        break;
      }
    }
    if (finished) {
      break;
    }
  }
  const lastDrawn = drawnNumbers.at(-1)
  return winningCard.addWinningNumbers() * lastDrawn
}

const part2 = (choices, cardsToProcess) => {
  let cards = cardsToProcess.map((card) => new Card(card))
  const drawnNumbers = []
  let lastWinningCard;
  let lastWinningNumber;
  for (const choice of choices) {
    drawnNumbers.push(choice)
    let hasCardsRemaining = false
    for (const card of cards) {
      if (!card.isComplete) {
        hasCardsRemaining = true
        card.markNumber(choice)
        if (card.isComplete) {
          lastWinningCard = card
          lastWinningNumber = choice
        }
      }
    }
    if (!hasCardsRemaining) {
      break
    }
  }
  return lastWinningCard.addWinningNumbers() * lastWinningNumber
}

console.log(part1(choices, rawCards))
console.log(part2(choices, rawCards))

