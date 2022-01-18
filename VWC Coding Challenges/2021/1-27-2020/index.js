/*
Write a JavaScript program that given 1 argument generates an
object with random keys and values. The argument should dictate
how many entries there should be.
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var generateRandomValueLength = function () {
    var max = 10, min = 2;
    return Math.random()
        .toString(36)
        .slice(1)
        .substr(1, Math.random() * (max - min) + min);
};
var generateRandomObject = function (num) {
    var _a;
    var obj = {};
    for (var i = 0; i < num; i++) {
        var randomVals = generateRandomValueLength();
        var randomKeys = generateRandomValueLength();
        obj = __assign(__assign({}, obj), (_a = {}, _a[randomKeys] = randomVals, _a));
    }
    return obj;
};
console.log(generateRandomObject(3));
