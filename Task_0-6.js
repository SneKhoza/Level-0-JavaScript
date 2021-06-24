function findMax() {
    var maxNum = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxNum) {
            maxNum = arguments[i];
        }
    }
    return maxNum;
}
findMax(1, 7, 3, 2, 6);