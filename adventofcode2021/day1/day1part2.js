"use strict";
exports.__esModule = true;
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
var day1part2 = function (arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        var window1 = [arr[i], arr[i + 1], arr[i + 2]].reduce(function (a, b) { return a + b; });
        var window2 = [arr[i + 1], arr[i + 2], arr[i + 3]].reduce(function (a, b) { return a + b; });
        if (window2 > window1) {
            count++;
        }
    }
    return count;
};
console.log(day1part2(day1input_1.input));
