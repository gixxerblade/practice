var matrix = function (num) {
    var row, col;
    for (row = 0; row < num; row++) {
        for (col = 0; col < row; col++) {
            if (row === col) {
                console.log(1);
            }
            console.log(0);
        }
    }
};
matrix(5);
