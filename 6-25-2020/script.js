const revStrArr = (arrayString) => {
  let tempArr;
  let newArr = [];
  for (let i = arrayString.length - 1; i >= 0; i--) {
    tempArr = arrayString.pop(i);
    newArr.push(tempArr);
  }
  console.log(newArr);
};
revStrArr(["H", "e", "l", "l", "o"]);

