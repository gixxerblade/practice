/* 
Algorithm to convert Roman Numerals to Integer Number:  

Split the Roman Numeral string into Roman Symbols (character).
Convert each symbol of Roman Numerals into the value it represents.
Take symbol one by one from starting from index 0: 
If current value of symbol is greater than or equal to the value of next symbol, then add this value to the running total.
else subtract this value by adding the value of next symbol to the running total.
Sample Test Cases
Small Roman Numeral
value1 VI
output 6
Large Roman Numeral
value2 CDVII
output 407

*/
const value1 = 'VI'
const value2 = 'CDVII'

const value = (val) => {
  switch (val) {
    case 'I': return 1
    case 'V': return 5
    case 'X': return 10
    case 'L': return 50
    case 'C': return 100
    case 'D': return 500
    case 'M': return 1000
  }
}

const convertRomans = (str) => {
  let result = 0
  for (i = 0; i < str.length; i++) {
    let s1 = value(str.charAt(i));
    if (i + 1 < str.length) {
      let s2 = value(str.charAt(i + 1));
      if (s1 >= s2) {
        result = result + s1;
      } else {
        result = result + s2 - s1;
        i++;
      }
    } else {
      result = result + s1;
    }
  }
  return result
}
console.log(convertRomans(value1))
console.log(convertRomans(value2))
console.log(convertRomans('CMXCVII'))