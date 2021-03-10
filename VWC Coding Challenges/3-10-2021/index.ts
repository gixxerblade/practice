const differenceTo19 = (num: number): number => {
  const result: number = Math.abs(num - 19);
  return result > 19 ? result * 3 : result;
};

console.log(differenceTo19(39));
console.log(differenceTo19(18));
