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
  return func(num1, num2);
}

const display = document.getElementById("display");

function updateDisplay(input) {
  if (input === "0") {
    content = "";
  }
  let addContent = document.createTextNode(input.toString());
  display.textContent = "";
  display.appendChild(addContent);
}
let pleaseResetDisplay = false

let content = "";

let currentOperator = ""

updateDisplay("0");

const displayEntryKeys = document.querySelectorAll(".display-entry");

displayEntryKeys.forEach(key => {
  key.addEventListener("click", () => {
    let addContent = (key.getAttribute("id"));
    if (pleaseResetDisplay === true) {
      pleaseResetDisplay = false;
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
  currentOperator = "";
  pleaseResetDisplay = false;
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
    num1 = parseFloat(content);
    pleaseResetDisplay = true;
  })
})


//equals