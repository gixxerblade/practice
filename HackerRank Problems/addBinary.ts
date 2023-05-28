// const addBinary = (a: string, b: string): string => (parseInt(a, 2) + parseInt(b, 2)).toString(2);
const addBinary = (a: string, b: string): string => {
  let total = ''
  const longest = a.length > b.length ? a.length : b.length
  for (let i = longest; i > 0; i--) {
    let hasCarry = false
    let carry = '1'
    if (a[i] === '1' && b[i] === '1') {
      total += '1'
      hasCarry = true
    }
  }
  return total;
}
const a = "11", b = "1"
console.log(addBinary(a, b));
const a1 = "1010", b1 = "1011"
console.log(addBinary(a1, b1));
//     "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
// "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"