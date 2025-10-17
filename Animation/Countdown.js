"use strict"

// constants for division
const dayMS = 86400000; // Milliseconds in a day
const hrMS = 3600000; // In an hour
const minMS = 60000; // In a minute
const secMS = 1000; // In a sec

const OFFSET = -68.9

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function pageLoad()
{
    timeLoop();
}

function timeLoop()
{
    let today = new Date();
    let nextYear = today.getFullYear() + 1;
    let target = new Date(nextYear,1,1);
    let targetDistance = target - today; // In milliseconds

    // Days calculation
    let daysLeft = Math.floor(targetDistance / dayMS);
    targetDistance = targetDistance % dayMS; // Remove the full days

    // Get each digit of daysLeft for counter
    let dayDigits = pad(daysLeft, 3).split('').map(Number);

    // Hours calc
    let hoursLeft = Math.floor(targetDistance / hrMS);
    targetDistance = targetDistance % hrMS; // Remove hours

    // Get each digit of hours
    let hourDigits = pad(hoursLeft, 2).split('').map(Number);

    // Minutes calc
    let minLeft = Math.floor(targetDistance / minMS);
    targetDistance = targetDistance % minMS; // Remove minutes

    // Get each digit of minutes
    let minDigits = pad(minLeft, 2).split('').map(Number);

    // Seconds calc
    let secLeft = Math.floor(targetDistance / secMS);

    // Get each digit of seconds
    let secDigits = pad(secLeft, 2).split('').map(Number);

    document.getElementById("clockHeader").innerHTML = "Countdown until January 1 " + nextYear;
    document.getElementById("currentDate").innerHTML = // Next line for readability
        "From " + months[today.getMonth()] + " " + today.getDate() + " - " + pad(today.getHours(), 2) + ":" + pad(today.getMinutes(), 2) + ":" + pad(today.getSeconds(), 2);
    
    // Update all the images to reflect the time
    document.getElementById("DaysHundreds").style.backgroundPosition = "0 " + String(OFFSET * dayDigits[0]) + "px";
    document.getElementById("DaysTens").style.backgroundPosition = "0 " + String(OFFSET * dayDigits[1]) + "px";
    document.getElementById("DaysOnes").style.backgroundPosition = "0 " + String(OFFSET * dayDigits[2]) + "px";

    document.getElementById("HoursTens").style.backgroundPosition = "0 " + String(OFFSET * hourDigits[0]) + "px";
    document.getElementById("HoursOnes").style.backgroundPosition = "0 " + String(OFFSET * hourDigits[1]) + "px";

    document.getElementById("MinTens").style.backgroundPosition = "0 " + String(OFFSET * minDigits[0]) + "px";
    document.getElementById("MinOnes").style.backgroundPosition = "0 " + String(OFFSET * minDigits[1]) + "px";

    document.getElementById("SecTens").style.backgroundPosition = "0 " + String(OFFSET * secDigits[0]) + "px";
    document.getElementById("SecOnes").style.backgroundPosition = "0 " + String(OFFSET * secDigits[1]) + "px";

    // Call function again after one second, continuing the loop
    setTimeout(() => {  timeLoop(); }, 1000);
}

// Function to add leading 0s to make output look good
// Thank you Stack Overflow
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}