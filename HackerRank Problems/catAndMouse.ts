const catAndMouse = (x, y, z) => {
  if (Math.abs(x - z) < Math.abs(y-z)) {
    return 'Cat A'
  }
  if (Math.abs(x - z) > Math.abs(y-z)) {
    return 'Cat B'
  }
  return 'Mouse C'
}
const x = 2, y = 5, z = 4

console.log(catAndMouse(x, y, z));
