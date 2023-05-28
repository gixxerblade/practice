const arr = [1, 2, 3, 4, 5]
const d = 4

const rotateLeft = (d: number, arr: number[]): number[] => {
  for (let i = d; i < arr.length; i++) {
    arr.unshift(arr.pop())    
  }
  return arr
}

console.log(rotateLeft(d, arr))