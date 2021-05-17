const display = document.getElementById("display");
const displayEntryKeys = document.querySelectorAll(".display-entry");
const plusminusKey = document.querySelector("#plusminus");
const operatorKeys = document.querySelectorAll(".operator");
const acKey = document.querySelector("#ac");
const equalsKey = document.querySelector("#equals");

let pleaseResetDisplay = false;
let evaluated = false;
let displayContent = "";
let currentOperator = "";
let num1 = 0;
let num2 = 0;

updateDisplay("0");

// eventListeners
displayEntryKeys.forEach(key => {
  key.addEventListener("click", () => {
    let addDisplayContent = (key.getAttribute("id"));
    if (pleaseResetDisplay === true || evaluated === true) {
      updateDisplay("0");
    };
    if (displayContent.length >= 20) {return};
    if (displayContent.includes(".") && addDisplayContent === ".") {return};
    displayContent = displayContent.concat(addDisplayContent);
    updateDisplay(displayContent);
  })  
})

acKey.addEventListener("click", () => {
  num1 = 0;
  num2 = 0;
  currentOperator = "";
  updateDisplay("0");
})

plusminusKey.addEventListener("click", () => {
  if (displayContent === "" || displayContent === "0") {
    return
  }
  if (displayContent.startsWith("-")) {
    displayContent = displayContent.replace("-", "")
  } else {
    displayContent = ("-").concat(displayContent);
  }
  updateDisplay(displayContent);
})

operatorKeys.forEach(operator => {
  operator.addEventListener("click", () => {
    if (currentOperator !== "") {
      evaluate();
    }
    currentOperator = operator.getAttribute("id");
    if (displayContent === "") {
      num1 = 0;
    } else {
      num1 = parseFloat(displayContent);
      num2 = 0;
    };
      pleaseResetDisplay = true;
  })
})

equalsKey.addEventListener("click", () => {
  if (currentOperator === "") {return};
  evaluate();
})

//functions
function updateDisplay(input) {
  if (input === "0") {
    pleaseResetDisplay = false;
    evaluated = false;
    displayContent = "";
  }
  let addDisplayContent = document.createTextNode(input.toString());
  display.textdisplayContent = "";
  display.appendChild(addDisplayContent);
}

function evaluate() {
  if (displayContent === "") {
    num2 = 0;
  } else {
    num2 = parseFloat(displayContent)
  };
  displayContent = (operate(currentOperator, num1, num2)).toString();
  updateDisplay(displayContent);
  evaluated = true;
  currentOperator = "";
}

function operate(func, num1, num2) {
  switch(func) {
    case "plus": 
      return plus(num1, num2);
    case "minus":
      return minus(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
  }
}

function plus (a, b) {
  return (a + b);
}
function minus (a, b) {
return (a - b);
}
function multiply (a, b) {
	return (a * b);
}
function divide (a, b) {
	return (a / b);
}

// Gotchas: watch out for and fix these bugs if they show up in your code:
// - You should round answers with long decimals so that they don’t overflow the screen.
// - Pressing = before entering all of the numbers or an operator could cause problems!
// - Pressing “clear” should wipe out any existing data.. make sure the user is really 
//    starting fresh after pressing “clear”
// - Display a snarky error message if the user tries to divide by 0… don’t let 
//    it crash your calculator!
// EXTRA CREDIT: Users can get floating point numbers if they do the math required 
//    to get one, but they can’t type them in yet. Add a . button and let users input 
//    decimals! Make sure you don’t let them type more than one though: 12.3.56.5. 
//    It is hard to do math on these numbers. (disable the decimal button if there’s 
//    already one in the display)
// EXTRA CREDIT: Make it look nice! This can be a good portfolio project… but not 
//    if it’s UGLY. At least make the operations a different color from the keypad buttons.
// EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the 
//    wrong number.
// EXTRA CREDIT: Add keyboard support!