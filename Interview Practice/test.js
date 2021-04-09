var findEvenOrOdd = function (num) {
    var sum = num.toString().split('').reduce(function (a, b) { return Number(a) + Number(b); }, 0);
    return sum % 2 === 0 ? 'even' : 'odd';
};
console.log(findEvenOrOdd(622653));
