function digital_root(n) {
  while (n.toString().length > 1) {
    n = n
      .toString(10)
      .split("")
      .map(t => parseInt(t))
      .reduce((a, b) => a + b);
  }
  return n;
}

console.log(digital_root(166));
digital_root(456);
digital_root(16);
digital_root(99999999999);
