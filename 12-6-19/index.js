/* 
Challenge: create a roman numeral generator. 
It takes a number and converts it into roman numerals
1 - I
5 - V
10 - X
50 - L
100 - C
500 - D
1000 - M
 */

let romanNumGen = num => {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  let romanized = "";

  for (let i = 0; i < decimalValue.length; i++) {
    while (decimalValue[i] <= num) {
      romanized += romanNumeral[i];
      num -= decimalValue[i];
    }
  }
  console.log(romanized);
};

romanNumGen(999);
romanNumGen(1949);
romanNumGen(1959);
romanNumGen(1925);
romanNumGen(2081);
romanNumGen(1993);
romanNumGen(1920);
romanNumGen(2009);
romanNumGen(1990);
romanNumGen(1990);
romanNumGen(1960);
