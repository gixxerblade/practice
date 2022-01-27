/**
 * Write a JavaScript program to get the standard deviation of an array of numbers.
 * @Input
 * console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21]));
 * console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21], true));
 * @Output
 * 13.284434142114991
 * 12.29899614287479
 */
var standardDeviation = function (values, isSamplePopulation) {
    if (isSamplePopulation === void 0) { isSamplePopulation = false; }
    var length = values.length;
    var mean = values.reduce(function (a, b) { return a + b; }, 0) / length;
    var meanOfSquaredDifferences = values.map(function (value) { return Math.pow((value - mean), 2); })
        .reduce(function (a, b) { return a + b; }, 0) / (isSamplePopulation ? length : length - 1);
    return Math.sqrt(meanOfSquaredDifferences);
};
console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21]));
console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21], true));
