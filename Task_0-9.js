function findVowels(vowelString) {
    const vowels = ["a", "e", "i", "o", "u"];
    const lowerCaseString = vowelString.toLowerCase();
    const vowelsFound = [];
    for (let i = 0; i < lowerCaseString.length; i++) {
        if (vowels.includes(lowerCaseString[i])) {
            vowelsFound.push(lowerCaseString[i]);
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