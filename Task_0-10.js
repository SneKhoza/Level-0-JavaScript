function commonCharacter(string1, string2) {
    const str1 = string1.split("");
    const str2 = string2.split("");
    const sorted1 = str1.concat().sort();
    const sorted2 = str2.concat().sort();
    const common = [];
    let i = 0;
    let j = 0;

    while (i < str1.length && j < str2.length) {
        if (sorted1[i] === sorted2[j]) {
            common.push(sorted1[i]);
            i++;
            j++;
        } else if (sorted1[i] < sorted2[j]) {
            i++;
        } else {
            j++;
        }
    }
    const commonString = common.join(", ");
    console.log(`Common letters: ${commonString}`);
}

commonCharacter("computers", "house");