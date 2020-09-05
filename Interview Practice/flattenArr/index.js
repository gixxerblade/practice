//Given this array [1,[2,[3]],4,[5],6]
//Write a function that will return a flattened array [1,2,3,4,5,6]

let flattenArray = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    !Array.isArray(array[i])
      ? newArray.push(array[i])
      : (newArray = newArray.concat(flattenArray(array[i])));
  }
  return newArray;
};

console.log(flattenArray([1, [2, [3]], 4, [5], 6]));
