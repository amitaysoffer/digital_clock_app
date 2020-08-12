const date = new Date();

const days = ['Sunday', 'Monday', 'Thuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// Set the day
const getDay = function () {
    let dayNum = date.getDay();
    for (let dayIndex in days) {
        if (dayNum == dayIndex) {

            return days[dayIndex];
        }
    }
}

// Set the month
const getMonth = function () {
    let monthNum = date.getMonth();
    for (let monthIndex in months) {
        if (monthNum == monthIndex) {

            return months[monthIndex];
        }
    }
}

// Set the date
const getDate = function () {
    let monthDate = date.getDate();
    return monthDate
}

// append the date on page
document.getElementById('date').innerHTML = `${getDay()}, ${getMonth()} ${getDate()}`;

// Set the time
const getTime = function () {
    let startDate = new Date();

    let time = startDate.toLocaleTimeString();
    document.getElementById('time').innerHTML = `${time}`
}

// Start the clock and rerun it every second
let startClock = getTime();
let runClock = setInterval(getTime, 1000);



// Click event to change clock
document.getElementById('btn').addEventListener('click', changeClock);

function changeClock() {
    let newDate = new Date();
    let hour = newDate.getHours();

    clearInterval(runClock);

    newHour = hour - 12
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();

    if (hour > 12) {
        clock = 'PM'
    } else {
        clock = 'AM'
    };

    document.getElementById('time').innerHTML = `${newHour}:${minute}:${second} ${clock}`;

    // Run the new clock every second
    setInterval(changeClock, 1000);
};


