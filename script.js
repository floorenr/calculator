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

const display = document.getElementById("display");

let pleaseResetDisplay = false

function updateDisplay(input) {
  if (input === "0") {
    pleaseResetDisplay = false;
    evaluated = false;
    content = "";
  }
  let addContent = document.createTextNode(input.toString());
  display.textContent = "";
  display.appendChild(addContent);
}

let evaluated = false

let content = "";

let currentOperator = ""

updateDisplay("0");

const displayEntryKeys = document.querySelectorAll(".display-entry");

displayEntryKeys.forEach(key => {
  key.addEventListener("click", () => {
    let addContent = (key.getAttribute("id"));
    if (pleaseResetDisplay === true || evaluated === true) {
      updateDisplay("0");
    };
    if (content.length >= 20) {return};
    if (content.includes(".") && addContent === ".") {return};
    content = content.concat(addContent);
    updateDisplay(content);
  })  
})

const acKey = document.querySelector("#ac");

acKey.addEventListener("click", () => {
  num1 = 0;
  num2 = 0;
  currentOperator = "";
  updateDisplay("0");
})

const plusminus = document.querySelector("#plusminus");

plusminus.addEventListener("click", () => {
  if (content === "" || content === "0") {
    return
  }
  if (content.startsWith("-")) {
    content = content.replace("-", "")
  } else {
    content = ("-").concat(content);
  }
  updateDisplay(content);
})

const operators = document.querySelectorAll(".operator")

let num1 = 0
let num2 = 0

operators.forEach(operator => {
  operator.addEventListener("click", () => {
    currentOperator = operator.getAttribute("id");
    if (content === "") {
      num1 = 0;
    } else {
      num1 = parseFloat(content)
    };
      pleaseResetDisplay = true;
  })
})

const equals = document.querySelector("#equals");

equals.addEventListener("click", () => {
  if (currentOperator === "") {return};
  evaluate();
})
  
function evaluate() {
  if (content === "") {
    num2 = 0;
  } else {
    num2 = parseFloat(content)
  };
  content = (operate(currentOperator, num1, num2)).toString();
  updateDisplay(content);
  evaluated = true;
  currentOperator = "";
}

// Gotchas: watch out for and fix these bugs if they show up in your code:
// - Users should be able to string together several operations and get the right 
//    answer, with each pair of numbers being evaluated at a time. For example, 
//    12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking 
//    for would be this student solution. Your calculator should not evaluate 
//    more than a single pair of numbers at a time. If you enter a number then 
//    an operator and another number that calculation should be displayed if 
//    your next input is an operator. The result of the calculation should be 
//    used as the first number in your new calculation.
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