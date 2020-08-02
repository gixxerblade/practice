function isOdd(int) {
  return (int & 1) === 1;
}

function isEven(int) {
  return (int & 1) === 0;
}

let checkOddEven = (num) => {
  if (num < 0) console.log("Must be greater than or equal to 0");
  else {
    for (let i = 0; i <= num; i++) {
      isEven(i) && console.log(`${i}: even`);
      isOdd(i) && console.log(`${i}: odd`);
    }
  }
};
checkOddEven(100);
