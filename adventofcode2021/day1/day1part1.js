"use strict";
exports.__esModule = true;
/**
 * https://adventofcode.com/2021/day/1
 */
var day1input_1 = require("./day1input");
var testValues = [
    199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263
];
var day1 = function (arr) {
    var count = 0;
    arr.forEach(function (val, i, arr) {
        if (arr[i + 1] > val) {
            count++;
        }
    });
    return count;
};
console.log(day1(day1input_1.input));
