"use strict";

function equalsClick() // Equals Button onClick
{
    let textbox = document.getElementById("currentNum"); // Get textbox
    let textboxNum = textbox.value;

    if (textboxNum == "")
    {
        alert("A number must be entered") // Make sure theres a last number in the equation
    } 
    else 
    {
        let equation = document.getElementById("currentEqu");
        equation.textContent += " " + textboxNum; // Add last number to stored equation

        // Check for divide by 0
        if (equation.textContent.includes("/ 0"))
        {
            alert("ERROR: Divide by 0 - Clearing input");
            clearAll();
        }
        else
        {
            // Record History
            let recordDiv = document.getElementById("recordDiv"); // Get div
            const para = document.createElement("p"); // Create p element
            recordDiv.append(para); // Put p element in div
            let recordEqu = equation.textContent; // Create String to be displayed in p

            // Find exponent operator and replace with the code readable operator
            if (equation.textContent.includes("^"))
            {
                equation.textContent = equation.textContent.replaceAll('^','**')
            }

            let answer = eval(equation.textContent); // Do the math

            if (answer === Infinity)
            {
                alert("Result is too big!")
            }
            else
            {
                recordEqu += " = " + answer; // Add answer to string
                para.append(document.createTextNode(recordEqu)); // Add string to text node to display

                clearAll();
                textbox.value = answer; // Output answer to textbox display
            }
        }
    }
}

function numClick(num) // All numbers onClick
{
    let textbox = document.getElementById("currentNum");
    let textboxNum = textbox.value;
    if (textboxNum == "")
    {
        textboxNum = 0; // Handles blank input field for first number
    } 
    else 
    {
        textboxNum = Number(textboxNum);
    }
    textboxNum = textboxNum * 10; // Adds a zero to the end of the number
    if (textboxNum >= 0) // Decides if number is positive/negative to add/subtract next number
    {
        textboxNum += Number(num);
    }
    else if (textboxNum < 0)
    {
        textboxNum -= Number(num);
    }
    textbox.value = textboxNum; // Update input
}

function operatorClick(operator) // Onclick for operators
{
    let textbox = document.getElementById("currentNum");
    let textboxNum = textbox.value;
    
    let label = document.getElementById("currentEqu");

    if (textboxNum == "")
    {
        alert("A number must be entered")
    } 
    else
    {
        label.textContent += " " + textboxNum + " " + operator
        clearTB();
    }
}

function factorialClick()
{
    let textbox = document.getElementById("currentNum"); // Get textbox
    let textboxNum = textbox.value;

    if (textboxNum == "")
    {
        alert("A number must be entered") // Make sure theres a number entered
    } 
    else
    {
        let recordDiv = document.getElementById("recordDiv"); // Get record div
        const para = document.createElement("p"); // Create p element
        recordDiv.append(para); // Add p to div
        let recordEqu = textboxNum + "! = "; // Create string to display in p

        textboxNum = Number(textboxNum)
        textbox.value = factorial(textboxNum) // Do factorial

        recordEqu += textbox.value; // Add answer to record string

        para.append(document.createTextNode(recordEqu)); // Display recorded equation
    }
}

function factorial(n) {
    try
    {
        if (n < 0) {
            alert("Cannot use negative numbers in factorial");
            return 0;
          }
          if (n === 0 || n === 1) {
            return 1;
          }
        
          return n * factorial(n - 1); // recursion
    }
    catch(err) 
    {
        alert("Result is too big!");
        return 0;
    }
  }

function negative() // +/- onClick
{
    let textbox = document.getElementById("currentNum");
    let textboxNum = textbox.value;

    textboxNum = textboxNum * -1; // Multiply by -1 to reverse number in input

    textbox.value = textboxNum; // Update input
}

function backSpace() // Back onClick
{
    let textbox = document.getElementById("currentNum");
    let textboxNum = textbox.value;
    if (textboxNum != "" && (Number(textboxNum) >= 10 || Number(textboxNum) <= -10)) // Does some math if needed to remove last number
    {
        let lastNum = textboxNum % 10;
        textboxNum = textboxNum - lastNum;
        textboxNum = textboxNum / 10;
        textbox.value = textboxNum;
    }
    else if (textboxNum != "" && (Number(textboxNum) <= 10 || Number(textboxNum) >= -10)) // Clears the textbox is number is too small
    {
        clearTB();
    }
}

function clearTB() // Clears textbox
{
    let textbox = document.getElementById("currentNum");
    textbox.value = "";
}

function clearAll() // Clears input textbox and label
{
    let textbox = document.getElementById("currentNum");
    textbox.value = "";

    let label = document.getElementById("currentEqu");
    label.textContent = "";
}

function clearHistory()
{
    let record = document.getElementById("recordDiv");
    let pAll = record.querySelectorAll("p");
    pAll.forEach(p => p.remove());
}