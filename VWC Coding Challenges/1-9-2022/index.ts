/**
 * Write a JavaScript function to convert an amount to coins.
 * Input
 * 46
 * Output
 * 25, 10, 10, 1
 */

const getChange = (cents: number, coins: number[] = [25, 10, 5, 1]) => {
  let change = {};
  let amount = cents
  while(amount > 0 && coins.length > 0) {
    if (amount % coins[0] !== 0) {
      change[coins[0]] = change[coins[0]] + 1 || 1
      amount = amount % coins[0]
      if (amount < coins[0]){
        coins.shift()
      }
    }
    getChange(amount, coins)
  }
  return change
}

console.log(getChange(46))