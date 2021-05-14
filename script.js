function add (a, b) {
  return (a + b);
}

function subtract (a, b) {
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

const displayContent = document.getElementById("display-content");

const startValue = document.createTextNode("0");

displayContent.appendChild(startValue);

let newDisplay = "";

const DisplayEntryKeys = document.querySelectorAll(".display-entry");

DisplayEntryKeys.forEach(key => {
  key.addEventListener("click", () => {
    let addContent = (key.getAttribute("id"));
    newDisplay = newDisplay.concat(addContent);
    updateDisplay(newDisplay);
  })  
})

function updateDisplay(newDisplay) {
  let addContent = document.createTextNode(newDisplay);
  displayContent.textContent = "";
  displayContent.appendChild(addContent);
}
