const simplify = (x: number, steps: number) => {
  const base = x + 1;
  const one: number = 1;
  let result: number = 1
  for (let i = 1; i <= steps; i++) {
    result /= one / base;
  }
  return result;
};
console.log(simplify(5, 4));
