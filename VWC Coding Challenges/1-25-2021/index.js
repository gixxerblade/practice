// Write a JavaScript program that given two arguments generates an array of random integers. The first argument is the array length and the second argument is the max number for each item in the array.
var genRandomArray = function (arrLength, maxNumber) {
    var result = [];
    result.length = arrLength;
    for (var i = 0; i <= result.length; i++) {
        result.push(maxNumber);
    }
    return result;
};
console.log(genRandomArray(3, 5));
