const divisibleBy100 = (num: number): boolean => {
  if (num === 0) return true;
  return num - Math.trunc(num / 100) * 100 === 0;
};
console.log(divisibleBy100(10));//false
console.log(divisibleBy100(1000)); //true
console.log(divisibleBy100(500)); //true
console.log(divisibleBy100(0)); //true
console.log(divisibleBy100(14));//false
console.log(divisibleBy100(-100));//true

