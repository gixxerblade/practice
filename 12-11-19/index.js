let getLength = (arr) =>{
    let newArr = arr.flat(Infinity);
    console.log(newArr.length);
}

getLength([1, [2, 3]]) // 3
getLength([1, [2, [3, 4]]]) // 4
getLength([1, [2, [3, [4, [5, 6]]]]]) // 6
getLength([1, [2], 1, [2], 1]) // 5

