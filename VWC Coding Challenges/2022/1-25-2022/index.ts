/**
 * Write a JavaScript program to get the standard deviation of an array of numbers.
 * @Input
 * console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21]));
 * console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21], true));
 * @Output
 * 13.284434142114991
 * 12.29899614287479
 */

const standardDeviation = (values: number[], isSamplePopulation: boolean = false): number => {
  const length = values.length;
  const mean = values.reduce((a, b) => a + b, 0) / length
  const meanOfSquaredDifferences = values.map(
    (value) => (value - mean) ** 2)
    .reduce((a, b) => a + b, 0) / (isSamplePopulation ? length : length - 1)
  return Math.sqrt(meanOfSquaredDifferences)
}

console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21]));
console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21], true));
