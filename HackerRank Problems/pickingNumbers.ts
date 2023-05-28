const pickingNumbers = (a: number[]): number => {
  for (let i = 0; i < a.length; i++) {
    let arr: number[] = []
    for (let j = 0; j < a.length; j++) {
      if (Math.abs(a[i] - a[j]) <= 1) {
        arr.push(arr[j])
      }      
    }
    return arr.length
  }
}
const arr = [4, 6, 5, 3, 3, 1]
const arr1 = [1, 2, 2, 3, 1, 2]
console.log(pickingNumbers(arr));
