function convertNumToTime(num) {
    var timeString
    var hour = Math.floor(num / 60);
    var minute = num % 60;

    if ((hour > 1 || hour === 0) && (minute > 1 || minute === 0)) { //0 hours and 0 minutes are plural
        timeString = hour + " hours, " + minute + " minutes.";
    } else if ((hour > 1 || hour === 0) && minute === 1) {
        timeString = hour + " hours, " + minute + " minute.";
    } else if (hour === 1 && (minute > 1 || minute === 0)) {
        timeString = hour + " hour, " + minute + " minutes.";
    } else {
        timeString = hour + " hour, " + minute + " minute.";
    }
    return console.log(timeString);
}
convertNumToTime(121);