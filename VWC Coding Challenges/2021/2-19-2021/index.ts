// Write a Javascript program that:
// Removes all given values from array
// Examples
var array = ["a", "b", "c", "a", "b", "c"];
// => ['b', 'b']

const _ = {
  pull: (array: unknown[], ...items: any) => {
    let res: any[] = [];
    for (let i = 0; i < array.length; i++) {
      if (items.indexOf(array[i]) < 0) {
        res.push(array[i]);
      }
    }
    return res;
  },
};

const __ = {
  pull: (arr: any[], ...itemsToPull: any) => {
    for (let i = 0; i < arr.length; i++) {
      if (itemsToPull.indexOf(arr[i]) > -1) {
        arr.splice(i, 1);
        --i;
      }
    }
    return arr;
  },
};

__.pull(array, "a", "c");
console.log(array);
console.log(__.pull(array, "a", "c"));
