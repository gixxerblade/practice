#!/usr/bin/env ts-node-script

/**
 * The rules are simple, each card has one or more values and the people with the highest hand value not exceeding  21 win the round. The number cards (1 thru 9) are worth their face value (e.g., one is worth one, five is worth five), the Jack/Queen/King are worth 10, and the Ace is worth 1 or 11 (the player chooses).



For the following rounds, please output the winner (1 indexed).



For example:

Input: 1QJ|996|J6A6|K22|9J9

Output: 1

Evaluate the value of each hand, in this case: 21,24,23,14,28
Figure out the winning value, in this case its 21.
Find all of the players that have tied for the winning value, in this case only one player.
Output the index of the winning players (1 indexed), in this case: 1


If more than one player wins then list all winning players separated by commas. If all players bust then they tie and all "win".


 */

const input = '1QJ|996|J6A6|K22|9J9'
const input1 = '9835|A33A|K5K|JA|A243'
const input2 = 'J5Q|6KA5|Q4|Q55J|QA'
const input3 = 'J32|AK|869|5Q6|A3'
const input4 = '26|Q38|2K8|55|73'
const input5 = '2287|12888|26543|2Q|5JK'
const input6 = 'Q47|AJ|1J28|97J|KA'
const input7 = 'AQ|27|57|2JJ|489'
const input8 = '4AA|79|15|45J|A82'
const input9 = 'JK2|QJ3|9627|A589|2KQ'

type JQKA = Record<string, number>
const easyMoney = (i: string) => {
  const lookup: JQKA = {
    J: 10,
    Q: 10,
    K: 10,
    A: 11,
  }
  const res: number[] = []
  const hands = i.split(' ').map((strhand) => {
    return strhand
      .split('')
      .map((each) => {
        if (each in lookup) {
          each = lookup[each] as any
        }
        return Number(each)
      }) 
      .reduce((a, b) => a + b)
  })
  const numClosestTo21: number = hands.reduce((prev, curr) => {
    const goal = 21
    return (Math.abs(curr - goal) <= Math.abs(prev - goal)
      && curr <= goal)
      ? curr
      : prev
  })
  // test all hands
  const allOver = hands.every((val) => val > 21)
  hands.forEach((hand, i) => {
    if (allOver) {
      res.push(i + 1)
    } else if (hand === numClosestTo21) {
      res.push(i + 1)
    }
  })
  return res.join(',')
}
console.log(easyMoney(process.argv[2]))
// console.log(easyMoney(input1));
// console.log(easyMoney(input2));
// console.log(easyMoney(input3));
// console.log(easyMoney(input4));
// console.log(easyMoney(input5));
// console.log(easyMoney(input6));
// console.log(easyMoney(input7));
// console.log(easyMoney(input8));
// console.log(easyMoney(input9));
