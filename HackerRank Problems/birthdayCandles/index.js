/* 
You are in charge of the cake for your niece’s birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.
Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.

birthdayCakeCandles has the following parameter(s):

ar: an array of integers representing candle heights
*/

let arr = [3, 2, 1, 3];
let arr1 = [1, 5, 2, 3, 4, 5, 5];
let birthdayCakeCandles = (ar) => {
  ar.sort((a, b) => b - a);
  let big = ar[0];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (ar[i] === big) {
      newArr.push(ar[i]);
    }
  }
  return newArr.length;
};
console.log(birthdayCakeCandles(arr));
console.log(birthdayCakeCandles(arr1));
