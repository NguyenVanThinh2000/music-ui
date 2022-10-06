export const stringtotime = (str, format) => {
    let date = new Date(0);
    date.setSeconds(str);
    let timeString = date.toISOString().substring(11, 19);
    let hours = timeString.split(":")[0];
    let minutes = timeString.split(":")[1];
    let seconds = timeString.split(":")[2];
    if (format === "mm:ss") {
        return minutes + ":" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
};
