/**
 * Basic Bases
 * The EngineerMan team have been given many pairs of numbers.
 * They are told that the 2 values in this pair are equal, but in varying bases.
 * They want to know the lowest number in base-10 form which makes these 2 values equal.
 * You will be given a list of comma separated strings, each which are encoded in one of the bases 2 through to 64.
 * It is your task to find which 2 in this list are equal and convert these to base 10, outputting the value.
 * The character ranges used for base conversions are
 * 0-9A-Za-z+/
 * 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/
 * Exam
 * Input: 10, A
 * Values:
 *   10
 *     - 2 # Bin
 *     - 10 # base
 *     - 17 # Hex
 *     - 65 # base
 *  A:
 *     - 10 # Hex
 *     - 10 # base
 * # Quite clearly, 10 is common between both numbers in decimal, so we output this
 * Output: 10
 */
/**
 * Test Case 1
 *  Argument 1
 *  1AB
 *  Argument 2
 *  FB
 *  Expected Output
 *  386
 */

const basicBases = (n1: string, n2: string) => {
  const setA = [], setB = [], counts = {};
  for (let i = 2; i <= 64; i++) {
    const numA = parseInt(n1, i)
    const numB = parseInt(n2, i)
    console.log(numA)
  }
  // const res = setA.filter(val=> setB.includes(val)).filter(Boolean).join()
  // return res
  return counts
}


console.log(basicBases('1AB', '386'))
console.log(basicBases('283', '1CE'))