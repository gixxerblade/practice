var BHO;
(function (BHO) {
    BHO["B"] = "B";
    BHO["H"] = "H";
    BHO["O"] = "O";
})(BHO || (BHO = {}));
var dec_to_bho = function (num, conversion) {
    return {
        'B': function (num) { return num.toString(2); },
        'H': function (num) { return num.toString(16); },
        'O': function (num) { return num.toString(10); }
    };
};
console.log(dec_to_bho(120, 'B'));
console.log(dec_to_bho(120, 'H'));
console.log(dec_to_bho(120, 'O'));
