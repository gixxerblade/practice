"use strict";
exports.__esModule = true;
var list_1 = require("./list");
var insertionSort = function (array) {
    var j, key;
    for (var i = 0; i < array.length; i++) {
        j = i - 1;
        key = array[i];
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
};
console.time();
console.log(insertionSort(list_1.largeArray));
console.timeEnd();
