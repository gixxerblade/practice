var f = function (n) { return Math.floor(n); };
var reverseNumber = function (num) {
    var reverse = 0, lastDigit = 0;
    while (num > 0) {
        lastDigit = f(num % 10);
        reverse = f(reverse * 10 + lastDigit);
        num = f(num / 10);
    }
    return reverse;
};
console.log(reverseNumber(30));
console.log(reverseNumber(300));
console.log(reverseNumber(300343454));
console.log(reverseNumber(999991));
