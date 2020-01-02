let combination = (...data) => {
  var sum = 1;
  for (var i = 0; i < data.length; i++) {
    sum = sum * data[i];
  }
  console.log(sum);
};
//combination(2, 3, 4, 5);
