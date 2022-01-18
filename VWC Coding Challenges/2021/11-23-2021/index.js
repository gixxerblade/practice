/*
Write a JavaScript program that work as a trim function (string) using regular expression.
Input
console.log(Trim(' VWC '));
Output
'VWC'
*/
var Trim = function (str) {
    return str.replace(/\s+/g, ' ');
};
console.log(Trim(' VWC '));
console.log(Trim(' VWC something    here. '));
