const isLeapYear = year => {
  if (year % 4 == 0) {
    if (year % 400 == 0) return true;
    else if (year % 100 == 0) return false;
    return true;
  } else return false;
};
console.log(isLeapYear(2000)); //true
console.log(isLeapYear(2100)); //false
console.log(isLeapYear(2400)); //true
console.log(isLeapYear(2300)); //false
console.log(isLeapYear(1939)); //false
console.log(isLeapYear(2004)); //true
console.log(isLeapYear(2018)); //false
console.log(isLeapYear(2020)); //true
