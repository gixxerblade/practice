function map(arr, mapCallback) {
  // if it is not array what do we do???
  // if it is an array what do we do???
  if (typeof arr !== "object") return Error("Not an array");
  if (typeof mapCallback !== "function") return Error("Not a function");
  else {
    let newArr = []; // 2, 3, 4
    for (let i = 0; i < arr.length; i++) {
      newArr.push(mapCallback(arr[i]));
    }
    console.log(newArr);
    return newArr;
  }
}

// returns new array
// example [1,2,3] + 1 === [2,3,4]
// parameters map(arr, callback)

function incrementByTwoCallback(el) {
  return el + 2;
}

// console.log(map([1, 2, 3], (n) => n + 1));
console.log(map([1, 2, 3], incrementByTwoCallback));

//
function filter(arr, filterCallback) {
  if (typeof arr !== "object") return Error("Not an array");
  if (typeof filterCallback !== "function") return Error("Not a function");
  else {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (filterCallback(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
}
//
function filterFunction(el) {
  // if (el !== 3) {
  //   return true;
  // } else return false;
  return el !== 3;
}

// console.log(filter([1, 2, 3, 3], filterFunction)); // [1, 2]
// console.log(filter([1, 2, 3, 3], (el) => el !== 3)); // [1, 2]

// const noThrees = [1,2,3,3].filter(n => n !== 3)

// Do every and some

// Every: does an array contain every element in an array?

let array = [1, 2, 3];
let below = (val) => val < 10;

let every = (arr, everyCallback) => {
  if (!Array.isArray(arr)) return Error(`${arr} is not an array`);
  if (typeof everyCallback !== "function") {
    return Error(`${everyCallback} is not a function`);
  }
  for (const i of arr) {
    if (!everyCallback(arr[i])) return false;
  }
  return true;
};

console.log("every func: ", every(array, below));

let some = (arr, everyCallback) => {
  if (!Array.isArray(arr)) return Error(`${arr} is not an array`);
  if (typeof everyCallback !== "function") {
    return Error(`${everyCallback} is not a function`);
  }
  for (const i of arr) {
    if (everyCallback(arr[i])) return true;
  }
  return false;
};
console.log(some(array, below));

let reduce = (arr, reduceCallback, initialVal) => {
  if (!Array.isArray(arr)) return Error(`${arr} is not an array`);
  if (typeof reduceCallback !== "function") {
    return Error(`${reduceCallback} is not a function`);
  }
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && initialVal === undefined) {
      initialVal = arr[0];
    } else {
      initialVal = reduceCallback(arr[i], initialVal, arr.indexOf(0), arr);
    }
  }
  return initialVal;
};
console.log(
  reduce([1, 2, 3, 4, 5, 6], (acc, curr) => {
    return acc + curr;
  })
);

let suc = [1, 2, 3, 4, 5, 6];

let successive = (arr, func, initial) => {
  let acc = initial;
  let result = []; // empty array to push vals to
  arr.forEach((val) => {
    //iterate over arr
    result.push(acc); //push new values to result
    acc = func(acc, val); //reduce func
  });
  result.push(acc); //push new values to result
  return result;
};

console.log(successive(suc, (acc, val) => acc + val, 0));
/*  const accumulations: T[] = [];
  let memo: T = initVal;
  accumulations.push(memo);
  data.forEach((x) => {
    memo = reducer(memo, x);
    accumulations.push(memo);
  });
  return accumulations;
} */

let succ = (arr) => {
    arr.forEach((val) => {
    reduce(arr, (accum, val) => {
      return accum + val;
    });
  });
};
console.log(succ([1, 2, 3, 4, 5, 6]));
