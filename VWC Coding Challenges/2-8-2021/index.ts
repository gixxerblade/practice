// Write a Javascript program that:
// Creates a slice of array with n elements dropped from the end.

class DropFromEnd {
  dropRight = (arr: unknown[], num: number): unknown[] => {
    if (num === 0) return arr;
    arr.splice(-num);
    return arr;
  };
}
const _ = new DropFromEnd();
console.log(_.dropRight([1, 2, 3], 1));
console.log(_.dropRight([1, 2, 3], 2));
console.log(_.dropRight([1, 2, 3], 5));
console.log(_.dropRight([1, 2, 3], 0));
