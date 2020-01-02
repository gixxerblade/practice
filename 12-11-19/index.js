let getLengthUsingFlat = arr => {
  let newArr = arr.flat(Infinity);
  console.log(newArr.length);
};
getLengthUsingFlat([1, [2, 3]]); // 3
getLengthUsingFlat([1, [2, [3, 4]]]); // 4
getLengthUsingFlat([1, [2, [3, [4, [5, 6]]]]]); // 6
getLengthUsingFlat([1, [2], 1, [2], 1]); // 5
getLengthUsingFlat([]); //0
console.log("\n");

let getLengthRecursive = arr => {
  let newArr = [];
  let flattenArr = arr => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenArr(arr[i]);
      } else newArr.push(arr[i]);
    }
  };
  flattenArr(arr);
  console.log(newArr.length);
};

getLengthRecursive([1, [2, 3]]); // 3
getLengthRecursive([1, [2, [3, 4]]]); // 4
getLengthRecursive([1, [2, [3, [4, [5, 6]]]]]); // 6
getLengthRecursive([1, [2], 1, [2], 1]); // 5
getLengthRecursive([]); //0
