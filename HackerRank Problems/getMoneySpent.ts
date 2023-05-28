const getMoneySpent = (keyboards, drives, b) => {
  let max = -1
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let pair = keyboards[i] + drives[j]
      if (pair > max && pair <= b) {
        max = pair
      }
    }
  }
  return max
}

const b = 60, keyboards = [40, 50, 60], drives = [5, 8, 12,]
console.log(getMoneySpent(keyboards, drives, b));
