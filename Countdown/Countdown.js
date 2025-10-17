"use strict"

// constants for division
const dayMS = 86400000; // Milliseconds in a day
const hrMS = 3600000; // In an hour
const minMS = 60000; // In a minute
const secMS = 1000; // In a sec

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

    // Hours calc
    let hoursLeft = Math.floor(targetDistance / hrMS);
    targetDistance = targetDistance % hrMS; // Remove hours

    // Minutes calc
    let minLeft = Math.floor(targetDistance / minMS);
    targetDistance = targetDistance % minMS; // Remove minutes

    // Seconds calc
    let secLeft = Math.floor(targetDistance / secMS);

    document.getElementById("clockHeader").innerHTML = "Countdown until January 1 " + nextYear;
    document.getElementById("currentDate").innerHTML = // Next line for readability
        "From " + months[today.getMonth()] + " " + today.getDate() + " - " + pad(today.getHours(), 2) + ":" + pad(today.getMinutes(), 2) + ":" + pad(today.getSeconds(), 2);

    document.getElementById("daysLabel").innerHTML = pad(daysLeft, 3) + " : ";
    document.getElementById("hoursLabel").innerHTML = pad(hoursLeft, 2) + " : ";
    document.getElementById("minLabel").innerHTML = pad(minLeft, 2) + " : ";
    document.getElementById("secLabel").innerHTML = pad(secLeft, 2);
    console.log("Output Updated")

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