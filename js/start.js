let now = new Date();
let startTime = new Date(2023, 3, 27, 10, 59, 59);
console.log(startTime.getTime() - now.getTime());


function dateToString(timeStr) {
    let string = timeStr.toString();
    string = string.substring(0, string.length - 3);
    return string.replace('T', " ");
}