const round = (value: number, places: number) => {
  const larger = Number(`${value}e+${places}`);
  const rounded = Math.round(larger);
  return Number(`${rounded.toString()}e-${places}`);
};
console.log(round(1.005, 2));
console.log(round(1.05, 2));
console.log(round(1.0005, 2));
