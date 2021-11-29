/**
 * Answer The Quadratic
 * Given a quadratic find the decimal values of x
 * Instructions
 * You'll get one input string formatted like 'ax^2+bx+c=0'. 
 * Return the two decimal values of x like 'x_value1,x_value2'.
 * @Inputs
 * value1
 * Single string formatted like 'ax^2+bx+c=0'.
 * value1 -9x^2-9x+7=0
 * @output -1.51379,-1.51379
 */
const value1 = '-9x^2-9x-7=0'
const value2 = '1x^2-1x-6=0'
const testDiscriminant = '5x^2+2x+1'
const findQuad = (equation) => {
  let answer1 = 0, answer2 = 0;
  const regex = /(?:x\^2\+|x\^2|x|\=0)/
  const [a, b, c] = equation.split(regex)
  const discriminant = Math.pow(b, 2) - (4 * a * c)
  if (discriminant < 0) return 'imaginary,imaginary'
  if (discriminant === 0) {
    return `${-b / (2 * a)}`;
  }
  answer1 = ((-b + Math.sqrt(discriminant)) / (2 * a));
  answer2 = ((-b - Math.sqrt(discriminant)) / (2 * a));
  return `${answer1},${answer2}`
}

console.log(findQuad(value1))
console.log(findQuad(value2))
// console.log(findQuad(testDiscriminant))

/* 
Test Results
Real failed
value1 1x^2-1x-6=0
expected output 3,-2
actual output NaN,NaN
Imaginary failed
value1 -9x^2-9x-7=0
expected output imaginary,imaginary
actual output NaN,NaN

*/