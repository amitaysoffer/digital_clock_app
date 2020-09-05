const days = ['Sunday', 'Monday', 'Thuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let isMilitaryTime = true;

// Date functions
const getDay = (currentDate) => days[currentDate.getDay()];
const getMonth = (currentDate) => months[currentDate.getMonth()];
const getDate = (currentDate) => currentDate.getDate();

// 12h AM/PM clock functions
// const getTime = () => new Date().toLocaleTimeString();
const getHourFor12hClock = (date) => {
    let hour = getHours(date);
    return hour >= 12 ? hour - 12 : hour
}
const getAmPm = currentDate => currentDate.getHours() >= 12 ? 'PM' : 'AM';

// 24h military clock functions
const getHours = (currentDate) => currentDate.getHours();
const getMinutes = (currentDate) => currentDate.getMinutes();
const getSeconds = (currentDate) => currentDate.getSeconds();

const getSecondsForMilitaryTime = (date) => {
    let seconds = getSeconds(date);
    return seconds <= 9 ? `0${seconds}` : seconds
}

const getMinutesForMilitaryTime = (date) => {
    let minutes = getMinutes(date);
    return minutes <= 9 ? `0${minutes}` : minutes
}

const displayClock = function () {
    const date = new Date();

    // append date on page
    document.getElementById('date').innerHTML = `${getDay(date)}, ${getMonth(date)} ${getDate(date)}`;
    // append time on page
    if (isMilitaryTime === false) {
        document.getElementById('time').innerHTML = `${getHourFor12hClock(date)}:${getMinutes(date)}:${getSeconds(date)} ${getAmPm(date)}`
    } else {
        document.getElementById('time').innerHTML = `${getHours(date)}:${getMinutesForMilitaryTime(date)}:${getSecondsForMilitaryTime(date)}`
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

