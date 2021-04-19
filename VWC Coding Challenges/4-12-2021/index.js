var testTime = function () {
    var arr = [];
    for (var i = 0; i < 500000; i++) {
        arr.push(i);
        console.log(arr[i]);
    }
    return arr;
};
console.time();
testTime();
console.timeEnd();
