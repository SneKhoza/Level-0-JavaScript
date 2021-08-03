function convertNumToTime(num) {
    let timeString;
    const hour = Math.floor(num / 60);
    const minute = num % 60;

    if ((hour > 1 || hour === 0) && (minute > 1 || minute === 0)) {
        timeString = `${hour} hours, ${minute} minutes.`;
    } else if ((hour > 1 || hour === 0) && minute === 1) {
        timeString = `${hour} hours, ${minute} minute.`;
    } else if (hour === 1 && (minute > 1 || minute === 0)) {
        timeString = `${hour} hour, ${minute} minutes.`;
    } else {
        timeString = `${hour} hour, ${minute} minute.`;
    }
    console.log(timeString);
}
convertNumToTime(121);