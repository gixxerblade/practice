const insertionSort = (arr: number[]) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--
    }
    arr[j + 1] = current    
  }
  return arr
}
console.time()
console.log(insertionSort([7,5,6,3,2,1,9,4,8]))
console.timeEnd()