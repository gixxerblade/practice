/**
 * Write a JavaScript program to get the number of times a function executed per second. hz is the unit for hertz, the unit of frequency defined as one cycle per second.
 * Input
 * Test functions with the same goal: sum up the elements in the array
 * const sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);
 * const sumForLoop = () => {
 *   let sum = 0;
 *   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
 *   return sum;
 * };
 * sumForLoop is nearly 10 times faster
 * console.log(Math.round(hz(sumReduce)));
 * console.log(Math.round(hz(sumForLoop)));
 * Output
 * 3584
 * 2688
 */
const numbers = Array.from(Array(10000).keys())
const sumFunctions = {
  sumReduce: (): number => numbers.reduce((acc, n) => acc + n),
  sumReduceRight: (): number => numbers.reduceRight((acc, n) => acc + n),
  sumForLoop: (): number => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    return sum
  },
  sumEval: () => eval(numbers.join('+')),
  sumWhile: () => {
    let total = 0;
    let i = -1
    while (++i < numbers.length) {
      total += numbers[i]
    }
    return total
  },
  sumForEach: () => {
    let total = 0;
    numbers.forEach(number => {
      total += number
    });
    return total
  },
  sumforOf: () => {
    let total = 0
    for (const number of numbers) {
      total += number
    }
    return total;
  },
  sumForIn: () => {
    let total: number = 0;
    for (const number in numbers) {
      total += numbers[number]
    }
    return total
  },
  sumMap: () => {
    let total = 0;
    const counter = numbers.map((number) => {
      total += number
    })
    return total
  },
}

const hz = (fn: () => void) => {
  const iterations = 100
  const before = performance.now();
  for (let i = 0; i < iterations; i++) {
    fn()
  }
  return (1000 * iterations) / (performance.now() - before)
};

for (const fn in sumFunctions) {
  if (Object.prototype.hasOwnProperty.call(sumFunctions, fn)) {
    const sumFn: any = sumFunctions[fn];
    console.log(Math.round(hz(sumFn)));
  }
}
