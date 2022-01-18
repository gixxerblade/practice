//make as trim function that doesn't use any String methods

//1. loop through forward till it reaches a character other than a space. Remove those spaces.
//2. loop through backwards till it reaches a character other than a space. Remove those spaces.
//3. return string.

let removeSpaces = str => {
  let arr = str.split("");
  let i = arr.indexOf(arr[0]);
  while (arr[i] === " ") {
    arr.shift();
  }
  let j = arr.length - 1;
  while (arr[j] === " ") {
    arr.pop();
    j--;
  }
  console.log(
    `Length before:${str.length} || Length after: ${
      arr.length
    } || Final word w/o NBSP: ${arr.join("")}`
  );
};
removeSpaces("   Hello There   ");
removeSpaces(
  "                                               Vet's Who Code                                       "
);
