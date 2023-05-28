const _ = {
  union: (a, b) => {
    const union = new Set(a)
    for (const i of b) {
      union.add(i)
    }
    return [...union].sort()
  } 
}

console.log(_.union([2], [1, 2]));
