//  

/**
 * @input value1 1919
 * @output 2
 */

const value1 = 1919;
const value2 = 9988777754
const recurseSum = num => {
  const numString = num.toString()
  let sum = 0
  for (let i = 0; i < numString.length; i++) {
    sum += parseInt(numString[i])
  }
  return sum > 9 ? recurseSum(sum) : sum
}

// console.log(recurseSum(value1))
console.log(recurseSum(value2))