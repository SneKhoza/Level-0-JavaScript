function commonCharacter(string1, string2) {
    const common = [];
    const length = Math.max(string1.length, string2.length);
    for (let i = 0; i < length; i++) {
        if (string1.includes(string2[i])) {
            common.push(string2[i]);
        }
    }
    const commonString = common.join(", ");
    console.log(`Common letters: ${commonString}`);
}

commonCharacter("house", "computers");