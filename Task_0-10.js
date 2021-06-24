function commonCharacter(string1, string2) {
    var str1 = string1.split('');
    var str2 = string2.split('');
    var sorted1 = str1.concat().sort();
    var sorted2 = str2.concat().sort();
    var common = [];
    var commonString;
    var i = 0;
    var j = 0;

    while (i < str1.length && j < str2.length) {
        if (sorted1[i] === sorted2[j]) {
            common.push(sorted1[i])
            commonString = common.toString();
            i++;
            j++;
        } else if (sorted1[i] < sorted2[j]) {
            i++;
        } else {
            j++;
        }
    }
    console.log("Common letters: " + commonString);
}

commonCharacter("house", "computers");