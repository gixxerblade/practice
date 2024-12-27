import { BunFile } from 'bun';

const file = Bun.file('./poker.txt');

type Card = { value: string; suit: 'H' | 'C' | 'S' | 'D' };
type Hand = { p1: Card[]; p2: Card[] };
type Eval = { rank: number; highCards: number[]; type: HandType };

const cardValues = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
} as const;

enum HandType {
  RF = 'Royal Flush',
  StraightFlush = 'Straight flush',
  F = 'Flush',
  FourKind = '4 of a kind',
  FH = 'Full house',
  S = 'Straight',
  ThreeKind = 'Three of a kind',
  TwoPair = 'Two pair',
  OnePair = 'One pair',
  None = 'None',
}

async function solve(file: BunFile) {
  const input = await file.text();
  const hands: Hand[] = input.split('\n').map(line => {
    const hands = line.split(' ');
    const parseCard = (card: string): Card => ({
      value: card.slice(0, card.length - 1), // Extract value
      suit: card.slice(-1) as Card['suit'], // Extract suit
    });

    return {
      p1: hands.slice(0, 5).map(parseCard),
      p2: hands.slice(5).map(parseCard),
    };
  });
  return hands.map(hand => getAllPlayerOneWins(hand)).reduce((a, b) => a + b);
}

function evalHand(cards: Card[]): Eval {
  const values = cards.map(card => cardValues[card.value]).sort((a, b) => b - a);
  const suits = cards.map(card => card.suit);
  const isFlush = new Set(suits).size === 1;
  
  // Check both regular straight and Ace-low straight
  const isStraight = values.every((v, i) => i === 0 || values[i - 1] - v === 1) ||
    (values[0] === 14 && values[1] === 5 && values[2] === 4 && 
     values[3] === 3 && values[4] === 2);

  const counts: Record<number, number> = {};
  for (const value of values) {
    counts[value] = (counts[value] || 0) + 1;
  }
  
  // Sort by frequency first, then by card value
  const sortedValues = Object.entries(counts)
    .sort(([val1, count1], [val2, count2]) => {
      if (count1 !== count2) return count2 - count1;
      return Number(val2) - Number(val1);
    })
    .map(([val]) => Number(val));

  const uniqueCounts = Object.values(counts).sort((a, b) => b - a);

  if (isFlush && isStraight && values[0] === cardValues.A) {
    return { rank: 1, highCards: values, type: HandType.RF };
  }
  if (isFlush && isStraight) {
    // Handle Ace-low straight flush
    if (values[0] === 14 && values[1] === 5) {
      return { rank: 2, highCards: [5,4,3,2,1], type: HandType.StraightFlush };
    }
    return { rank: 2, highCards: values, type: HandType.StraightFlush };
  }
  if (uniqueCounts[0] === 4) {
    return { rank: 3, highCards: sortedValues, type: HandType.FourKind };
  }
  if (uniqueCounts[0] === 3 && uniqueCounts[1] === 2) {
    return { rank: 4, highCards: sortedValues, type: HandType.FH };
  }
  if (isFlush) {
    return { rank: 5, highCards: values, type: HandType.F };
  }
  if (isStraight) {
    if (values[0] === 14 && values[1] === 5) {
      return { rank: 6, highCards: [5,4,3,2,1], type: HandType.S };
    }
    return { rank: 6, highCards: values, type: HandType.S };
  }
  if (uniqueCounts[0] === 3) {
    return { rank: 7, highCards: sortedValues, type: HandType.ThreeKind };
  }
  if (uniqueCounts[0] === 2 && uniqueCounts[1] === 2) {
    return { rank: 8, highCards: sortedValues, type: HandType.TwoPair };
  }
  if (uniqueCounts[0] === 2) {
    return { rank: 9, highCards: sortedValues, type: HandType.OnePair };
  }
  return { rank: 10, highCards: values, type: HandType.None };
}

function getAllPlayerOneWins(hand: Hand): number {
  const p1Hand = evalHand(hand.p1);
  const p2Hand = evalHand(hand.p2);

  console.log('Player 1 Hand:', p1Hand, 'Player 2 Hand:', p2Hand);
  const isTwoPair = p1Hand.type === HandType.TwoPair && p2Hand.type === HandType.TwoPair;
  if (p1Hand.rank !== p2Hand.rank) {
    const result = p1Hand.rank < p2Hand.rank ? 1 : 0;
    console.log('Result:', result === 1 ? 'Player 1 wins' : 'Player 2 wins');
    return result;
  }

  for (let i = 0; i < p1Hand.highCards.length; i++) {
    if (p1Hand.highCards[i] !== p2Hand.highCards[i]) {
      const result = p1Hand.highCards[i] > p2Hand.highCards[i] ? 1 : 0;
      console.log('Result:', result === 1 ? 'Player 1 wins' : 'Player 2 wins');
      return result;
    }
  }

  console.log('Result: Tie');
  return 0;
}

solve(file).then(hands => console.log(hands));
