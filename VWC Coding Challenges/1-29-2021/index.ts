import { largeArray } from "./list";
const insertionSort = (array: number[]): number[] => {
  let j: number, key: number;
  for (let i = 0; i < array.length; i++) {
    j = i - 1;
    key = array[i];
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
};
console.time();
console.log(insertionSort(largeArray));
console.timeEnd();
