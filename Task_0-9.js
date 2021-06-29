function findVowels(vowelString) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var LowercaseString = vowelString.toLowerCase();
    var stringArray = LowercaseString.split('');
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

    var newArray = [vowelsFound[0]];
    for (var k = 1; k < vowelsFound.length; k++) {
        if (vowelsFound[k] != vowelsFound[k - 1]) {
            newArray.push(vowelsFound[k]);
        }
    }
    var newString = newArray.toString();
    console.log("Vowels: " + newString);
}

findVowels("Umuzi");