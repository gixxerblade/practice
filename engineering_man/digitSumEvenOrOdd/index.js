/* 
You will be given an integer and your job is to 
determine the sum made up by each individual digit.
Once you have the sum, determine if the sum is even
or odd and then print out either "even" or "odd".
*/
const value1 = 31
const evenOrOdd = num => {
  let result = 0
  const numStr = num.toString()
  for (let i = 0; i < numStr.length; i++) {
    result += parseInt(numStr[i])
  }
  return result & 1 === 1 ? 'odd' : 'even'
}

console.log(evenOrOdd(57))