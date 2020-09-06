const days = ['Sunday', 'Monday', 'Thuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let isMilitaryTime = false;

// Date functions
const getDay = (currentDate) => days[currentDate.getDay()];
const getMonth = (currentDate) => months[currentDate.getMonth()];
const getDate = (currentDate) => currentDate.getDate();

// Time functions
const getHours = (currentDate) => currentDate.getHours();
const getMinutes = (currentDate) => currentDate.getMinutes();
const getSeconds = (currentDate) => currentDate.getSeconds();

const getHourFor12hClock = (date) => {
    const hour = getHours(date);
    return hour > 12 ? hour - 12 : hour
}
const addAmPm = currentDate => currentDate.getHours() >= 12 ? 'PM' : 'AM';

const addZeroToSeconds = (date) => {
    const seconds = getSeconds(date);
    return seconds <= 9 ? `0${seconds}` : seconds
}
const addZeroToMinutes = (date) => {
    const minutes = getMinutes(date);
    return minutes <= 9 ? `0${minutes}` : minutes
}

const displayClock = function () {
    const date = new Date();

    // append date on page
    document.getElementById('date').innerHTML = `${getDay(date)}, ${getMonth(date)} ${getDate(date)}`;
    // append time on page
    if (isMilitaryTime === false) {
        document.getElementById('time').innerHTML = `${getHourFor12hClock(date)}:${addZeroToMinutes(date)}:${addZeroToSeconds(date)} ${addAmPm(date)}`
    } else {
        document.getElementById('time').innerHTML = `${getHours(date)}:${addZeroToMinutes(date)}:${addZeroToSeconds(date)}`
    }
}

setInterval(displayClock, 1000);

document.getElementById('toggle-btn').addEventListener('click', function () {
    isMilitaryTime = isMilitaryTime === false
        ? true
        : false

    displayClock();
});

displayClock();

