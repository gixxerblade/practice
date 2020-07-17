// Returns the nth term of the Fibonacci Sequence
// e.g. Fibonacci(14) will return the first 14 numbers
const Fibonacci = (nth) => {
    let arr = [0, 1];
    for (let i = 2; i < nth + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
    return arr.toString()
};
console.log(Fibonacci(14));
