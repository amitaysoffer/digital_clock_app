const date = new Date();

const days = ['Sunday', 'Monday', 'Thuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


const getDay = function () {
    let dayNum = date.getDay();
    for (let dayIndex in days) {
        if (dayNum == dayIndex) {

            return days[dayIndex];
        }
    }
}

const getMonth = function () {
    let monthNum = date.getMonth();
    for (let monthIndex in months) {
        if (monthNum == monthIndex) {

            return months[monthIndex];
        }
    }
}

const getDate = function () {
    let monthDate = date.getDate();
    return monthDate
}

const getTime = function () {
    let dynamicDate = new Date();

    let hour = dynamicDate.getHours();
    let minute = dynamicDate.getMinutes();
    let second = dynamicDate.getSeconds();

    // let time = `${hour}:${minute}:${second}`;
    // console.log(`${hour}:${minute}:${second}`);
    // console.log(dynamicDate.toLocaleTimeString())
    
    let clock;
    if (hour > 12) {
        clock = 'PM'
    } else {
        clock = 'AM'
    };

    let time = dynamicDate.toLocaleTimeString();
    document.getElementById('time').innerHTML = `${time} ${clock}`
}

getTime();
setInterval(getTime, 1000)
document.getElementById('date').innerHTML = `${getDay()}, ${getMonth()} ${getDate()}`;
