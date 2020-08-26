/* 
Write a JavaScript program to split values of two given arrays into two groups. If an element in filter is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
Object.prototype.toString.call(value) */

let trueOrFalse = (arr1, arr2) => {
  let arr = arr1.concat(arr2),
    trueArr = [],
    falseArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      trueArr.push(arr[i]);
    } else falseArr.push(arr[i]);
  }
  return { trueArr, falseArr };
};
console.log(
  trueOrFalse([false, 1, "lol", NaN, [undefined, NaN, false, -0]], [{lmao:undefined}, -0, "", undefined, 3, 5, "omg"])
);
