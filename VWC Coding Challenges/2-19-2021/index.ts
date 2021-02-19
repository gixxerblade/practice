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

console.log(_.pull(array, "a", "c"));
