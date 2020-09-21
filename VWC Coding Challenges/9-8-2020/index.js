// Write a JavaScript program to convert a number in bytes to a human-readable string.

let prettyBytes = (num, round, space = true) => {
  let sign = Math.sign(num);
  let absNum = Math.abs(num);
  let lookup = new Map([
    [1000, "KB"],
    [1000000, "MB"],
    [1e9, "GB"],
    [1e12, "TB"],
  ]);
  for (const [key, value] of lookup) {
    if (Math.ceil(absNum / key) < 1000) {
      return space
        ? `${((absNum / key) * sign).toPrecision(round)} ${value}`
        : `${((absNum / key) * sign).toPrecision(round)}${value}`;
    }
  }
};

console.log(prettyBytes(1000));
console.log(prettyBytes(-27145424323.5821, 5));
console.log(prettyBytes(123456789, 3, false));
