//Creates an array of elements split into groups the length of size.
//If array can't be split evenly, the final chunk will be the remaining elements.

const chunk = (arr: any[], size: number = 1): [any[], any[]] => {
  let first = arr.slice(0, size);
  let last = arr.slice(size, arr.length);
  return [first, last];
};
console.log(chunk(["a", "b", "c", "d"], 2));
console.log(chunk(["a", "b", "c", "d"], 3));
