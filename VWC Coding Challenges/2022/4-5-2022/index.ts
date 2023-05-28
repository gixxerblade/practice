const chunk = (arr: any[], size: number = 0) => arr.reduce((acc, curr, idx) => {
    if (idx % size === 0) {
      return [...acc, [curr]]
    }
    return [
      ...acc.slice(0, -1), 
      [...acc.slice(-1)[0], curr]
    ]
  }, []);

console.log(chunk(['a', 'b', 'c', 'd'], 2))
console.log(chunk(['a', 'b', 'c', 'd'], 3))