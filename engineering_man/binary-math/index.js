/**
 * Binary Math
 * Given two comma separated numbers return the sum value of these numbers in both decimal and binary.
 */
  const nums = process.argv[2].split(',')
  const total = nums.reduce((total, input) => parseInt(total) + parseInt(input))
  console.log(`${total} is ${total.toString(2)}`)

