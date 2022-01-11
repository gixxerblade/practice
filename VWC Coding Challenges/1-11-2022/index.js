var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
/**
 * Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
 * Input
 * [1,2,3,4,5]
 * Output
 * 2,4
 */
var numbers = [1, 2, 3, 4, 5];
var findPenultimateNumbers = function (arr) {
    var arrSet = __spreadArray([], new Set(arr.sort()));
    var len = arrSet.length;
    return len;
};
console.log(findPenultimateNumbers(numbers));
