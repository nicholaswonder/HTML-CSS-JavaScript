'use strict'
// Some global definitions
const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthDays = 
{
    "January"   : 31,
    "Febuary"   : 28,
    "March"     : 31,
    "April"     : 30,
    "May"       : 31,
    "June"      : 30,
    "July"      : 31,
    "August"    : 31,
    "September" : 30,
    "October"   : 31,
    "November"  : 30,
    "December"  : 31
}

function pageLoad()
{
    let today = new Date();
    fillCalendar(today.getMonth(), today.getFullYear());
}

function fillCalendar(selectedMonth, year)
{
    // Create 6 Rows of 7 dates

    // Change Month Header
    document.getElementById("currentMonth").innerHTML = months[selectedMonth] + " " + year;

    // Get week divs
    let week1 = document.getElementById("week1");
    let week2 = document.getElementById("week2");
    let week3 = document.getElementById("week3");
    let week4 = document.getElementById("week4");
    let week5 = document.getElementById("week5");
    let week6 = document.getElementById("week6");

    // Will iterate and create new spans, only putting a number inside when daynum > 0 && daynum < monthDays[selectedMonth]
    let daynum = 0 - new Date(year + "-" + (selectedMonth + 1) + "-01").getDay();
    let totalDays = monthDays[months[selectedMonth]]; // How many days in selected month

    if (selectedMonth === 1)
    {
        totalDays += isLeapYear(year); // Adds one day to Febuary if its a leap year
    }

    let spanElement; // Leave undefined for now

    // Week 1 loop
    for (let i=0; i<7; i++)
    {
        daynum += 1;
        spanElement = document.createElement('span');
        if (daynum > 0)
        {
            spanElement.innerHTML = daynum;
        }
        spanElement.classList.add("calendarDays");
        week1.appendChild(spanElement);
    }

    // Week 2
    for (let i=0; i<7; i++)
    {
        daynum += 1;
        spanElement = document.createElement('span');
        spanElement.innerHTML = daynum;
        spanElement.classList.add("calendarDays");
        week2.appendChild(spanElement);
    }

    // Week 3
    for (let i=0; i<7; i++)
    {
        daynum += 1;
        spanElement = document.createElement('span');
        spanElement.innerHTML = daynum;
        spanElement.classList.add("calendarDays");
        week3.appendChild(spanElement);
    }

    // Week 4
    for (let i=0; i<7; i++)
    {
        daynum += 1;
        spanElement = document.createElement('span');
        if (daynum <= totalDays)
        {
            spanElement.innerHTML = daynum;
        }
        spanElement.classList.add("calendarDays");
        week4.appendChild(spanElement);
    }

    // Week 5
    for (let i=0; i<7; i++)
    {
        daynum += 1;
        spanElement = document.createElement('span');
        if (daynum <= totalDays)
        {
            spanElement.innerHTML = daynum;
        }
        spanElement.classList.add("calendarDays");
        week5.appendChild(spanElement);
    }

    // Week 6
    for (let i=0; i<7; i++)
    {
        daynum += 1;
        spanElement = document.createElement('span');
        if (daynum <= totalDays)
        {
            spanElement.innerHTML = daynum;
        }
        spanElement.classList.add("calendarDays");
        week6.appendChild(spanElement);
    }
}

function isLeapYear(year)
{
    if(year % 100 === 0)
    {
        if(year % 400 === 0)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    else if(year % 4 === 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

function clearCalendar()
{
    let week1 = document.getElementById("week1");
    let week2 = document.getElementById("week2");
    let week3 = document.getElementById("week3");
    let week4 = document.getElementById("week4");
    let week5 = document.getElementById("week5");
    let week6 = document.getElementById("week6");

    week1.innerHTML = "";
    week2.innerHTML = "";
    week3.innerHTML = "";
    week4.innerHTML = "";
    week5.innerHTML = "";
    week6.innerHTML = "";

}

function rightButtonClick()
{
    // Get current month/year from top label
    let currentMonthYear = document.getElementById("currentMonth").innerText.split(" ");
    let month = months.indexOf(currentMonthYear[0]);
    let year = parseInt(currentMonthYear[1]);

    if(month === 11) // if month == december
    {
        month = 0; // month = January
        year += 1; // year + 1
    }
    else
    {
        month += 1;
    }

    clearCalendar();
    fillCalendar(month, year);
}

function leftButtonClick()
{
    // Get current month/year from top label
    let currentMonthYear = document.getElementById("currentMonth").innerText.split(" ");
    let month = months.indexOf(currentMonthYear[0]);
    let year = parseInt(currentMonthYear[1]);

    if(month === 0) // if month == january
    {
        month = 11; // month = december
        year -= 1; // year - 1
    }
    else
    {
        month -= 1;
    }

    clearCalendar();
    fillCalendar(month, year);
}