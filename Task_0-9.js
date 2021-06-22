function findVowels(vowelString) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var stringArray = vowelString.split('');
    var vowelSorted = vowels.concat().sort();
    var stringArraySorted = stringArray.concat().sort();
    var vowelsFound = [];
    var CompleteString;
    var i = 0;
    var j = 0;

    while (i < stringArray.length && j < vowels.length) {
        if (stringArraySorted[i] === vowelSorted[j]) {
            vowelsFound.push(stringArraySorted[i]);
            CompleteString = vowelsFound.toString();
            i++;
            j++;
        } else if (stringArraySorted[i] < vowelSorted[j]) {
            i++;
        } else {
            j++;
        }
    }
    return console.log("Vowels: " + CompleteString);
}

findVowels("Umuzi");