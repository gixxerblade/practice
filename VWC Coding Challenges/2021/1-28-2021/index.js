"use strict";
// Write a JavaScript program that performs bubble sort on an array.
exports.__esModule = true;
var list_1 = require("./list");
var bubbleSortSteve = function (arr) {
    var swapped = false;
    var len = arr.length;
    do {
        swapped = false;
        for (var i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
};
function bubbleSortAndrew(arr) {
    var _a;
    var sorted = false;
    while (!sorted) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                _a = [arr[i + 1], arr[i]], arr[i] = _a[0], arr[i + 1] = _a[1];
            }
            sorted = true;
        }
    }
    return arr;
}
function bubbleSortCharley(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var returnResult = function (func) {
    var t0 = new Date().getTime();
    console.log(func());
    var t1 = new Date().getTime();
    var time = t1 - t0;
    console.log("Execution time: " + time + "ms");
};
returnResult(function () { return bubbleSortSteve(list_1.largeArray); });
returnResult(function () { return bubbleSortAndrew(list_1.largeArray); });
returnResult(function () { return bubbleSortCharley(list_1.largeArray); });
