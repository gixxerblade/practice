//Write a JavaScript program to measure the time taken by a function to execute.

/* let iterate = () => {
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(Math.random() * i - Math.sqrt(i));
    arr.splice(i + 1, i, Math.random() * i);
    for (let j = 0; j < 100; j++) {
      arr.splice(j, i, Math.random() * j);
      arr.push(Math.random() * j);
      arr.push(j - i);
      for (let k = 0; k < 100; k++) {
        arr.push(Math.random() * i * Math.min(i - k));
        arr.push((Math.random() * j * k) / Math.PI);
        arr.splice(k, i, Math.random() * k);
        arr.push(k * i + j);
      }
    }
  }
  return arr;
};

let funcTime = (func) => {
  let start = new Date();
  let hrstart = process.hrtime();
  func();
  let hrend = process.hrtime(hrstart);
  let end = new Date() - start;
  console.info("Execution time: %dms", end);
  console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1] / 1000000);
}; */

//funcTime(iterate);

const findVowels = (s) => {
  return s.match(/[aeious]/gi) ? s.match(/[aeious]/gi).length : 0;
};
console.log(findVowels("The quick brown fox"))
