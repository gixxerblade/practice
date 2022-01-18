const testTime = (): number[] => {
  let arr = [];
  for (let i = 0; i < 50000; i++) {
    for (let j = 0; j < 50000; j++) {
        arr.push([i, j]);
    }
  }
  return arr;
};
console.time();
testTime();
console.timeEnd();
