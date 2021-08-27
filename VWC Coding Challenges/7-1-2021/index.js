var max = function (arrOfNums) {
    var sortNums = function (a, b) { return b - a; };
    return arrOfNums.sort(sortNums)[0];
};
console.log(max([-12, -34, 0, -56, -1]));
console.log(max([12, 34, 56, 1]));
