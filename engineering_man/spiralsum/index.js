// Given the size of a spiral, calcuale the sum of the four corners.

const value1 = '2x2'

const spiralSum = (val) => {
  const size = parseInt(val[0])
  const len = Math.pow(size, 2)
  for (let i = 1; i <= len; i++) {
    console.log(4 * Math.pow(i, 2) + 3 * i + 1)
  }
};

console.log(spiralSum('4x4`'));
//4*Math.pow(i,2) + 3*i + 1