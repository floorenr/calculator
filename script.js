const display = document.getElementById("display");
const displayEntryKeys = document.querySelectorAll(".display-entry");
const plusminusKey = document.querySelector("#plusminus");
const operatorKeys = document.querySelectorAll(".operator");
const acKey = document.querySelector("#ac");
const equalsKey = document.querySelector("#equals");

let pleaseResetDisplay = false;
let displayContent = "";
let currentOperator = "";
let num1 = 0;
let num2 = 0;
let displayKeyPressed = false;

updateDisplay("0");

// eventListeners
displayEntryKeys.forEach(key => {
  key.addEventListener("click", () => {
    let addDisplayContent = (key.getAttribute("id"));
    if (pleaseResetDisplay === true) {
      updateDisplay("0");
    };
    if (displayContent.length >= 16) {return};
    if (displayContent.includes(".") && addDisplayContent === ".") {return};
    displayContent = displayContent.concat(addDisplayContent);
    updateDisplay(displayContent);
    displayKeyPressed = true;
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
    if (currentOperator !== "" && displayKeyPressed === true) {
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
      displayKeyPressed = false;
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
    displayContent = "";
  }
  let addDisplayContent = document.createTextNode(input.toString());
  display.textContent = "";
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
  pleaseResetDisplay = true;
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

// EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the 
//    wrong number.
// EXTRA CREDIT: Add keyboard support!