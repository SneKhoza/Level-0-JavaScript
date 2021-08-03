function findVowels(vowelString) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const lowercaseString = vowelString.toLowerCase();
    const stringArray = lowercaseString.split("");
    const vowelSorted = vowels.concat().sort();
    const stringArraySorted = stringArray.concat().sort();
    const vowelsFound = [];
    let i = 0;
    let j = 0;

    while (i < stringArray.length && j < vowels.length) {
        if (stringArraySorted[i] === vowelSorted[j]) {
            vowelsFound.push(stringArraySorted[i]);
            i++;
            j++;
        } else if (stringArraySorted[i] < vowelSorted[j]) {
            i++;
        } else {
            j++;
        }
    }

    const newArray = [vowelsFound[0]];
    for (let k = 1; k < vowelsFound.length; k++) {
        if (vowelsFound[k] !== vowelsFound[k - 1]) {
            newArray.push(vowelsFound[k]);
        }
    }
    const newString = newArray.join(", ");
    console.log(`Vowels: ${newString}`);
}

findVowels("Umuzi");