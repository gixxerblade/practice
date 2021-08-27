const convert = (amount) => {
  let left;
  const coins = [25, 10, 5, 1];
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = amount - coins[0];
      return [coins[0]].concat(convert(left, coins));
    } else {
      coins.shift();
      return convert(amount, coins);
    }
  }
};
console.log(convert(46));
