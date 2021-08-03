function findMax(...args) {
    let maxNum = args[0];
    for (let i = 0; i < args.length; i++) {
        if (args[i] > maxNum) {
            maxNum = args[i];
        }
    }
    return maxNum;
}
console.log(findMax(1, 7, 3, 2, 9));