var stepsTaken = function (inputs) {
    var res = inputs.split(',').map(Number);
    var forwards = res[0], backwards = res[1], startingBlock = res[2], goal = res[3];
    var steps = startingBlock;
    var repeated = Math.ceil((goal - startingBlock) / (forwards - backwards));
    while (steps < goal) {
        steps += forwards;
        steps -= backwards;
    }
    var totalSteps = (forwards + backwards) * repeated;
    return "".concat(repeated, ",").concat(totalSteps);
};
console.log(stepsTaken(process.argv[2]));
