// Write a JavaScript program that performs bubble sort on an array.

import { largeArray } from "./list";
const bubbleSortSteve = (arr: number[]): number[] => {
  let swapped: boolean = false;
  let len: number = arr.length;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

function bubbleSortAndrew(arr: Array<number>): Array<number> {
  let sorted = false;
  while (!sorted) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
      sorted = true;
    }
  }
  return arr;
}

function bubbleSortCharley(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const returnResult = (func: () => {}): void => {
  let t0 = new Date().getTime();
  console.log(func());
  let t1 = new Date().getTime();
  let time = t1 - t0;
  console.log(`Execution time: ${time}ms`);
};
returnResult(() => bubbleSortSteve(largeArray));
returnResult(() => bubbleSortAndrew(largeArray));
returnResult(() => bubbleSortCharley(largeArray));
