const days = ['Sunday', 'Monday', 'Thuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// Get the day
const getDay = function () {
    let dayNum = new Date().getDay();
    for (let dayIndex in days) {
        if (dayNum == dayIndex) {

            return days[dayIndex];
        }
    }
}

// Get the month
const getMonth = function () {
    let monthNum = new Date().getMonth();
    for (let monthIndex in months) {
        if (monthNum == monthIndex) {

            return months[monthIndex];
        }
    }
}

// Get the date
const getDate = function () {
    let monthDate = new Date().getDate();
    return monthDate
}

// Get the time
const getTime = function () {
    // let startDate = new Date();
    let time = new Date().toLocaleTimeString();
    //console.log(time);
    return time
}

const hourClock = function () {
    let clockTime;
    let hour = new Date().getHours()

    if (hour > 12) {
        clockTime = 'PM'
    } else {
        clockTime = 'AM'
    };

    return clockTime;
}


// document.getElementById('btn').addEventListener('click', changeClock);


setInterval(function () {

    // append date on page
    document.getElementById('date').innerHTML = `${getDay()}, ${getMonth()} ${getDate()}`;
    // append time on page
    document.getElementById('time').innerHTML = `${getTime()} ${hourClock()}`

    // document.getElementById('clock-type').innerHTML = `${changeClock()}`

}, 1000);


