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

updateDisplay("0");

let content = ""

const displayEntryKeys = document.querySelectorAll(".display-entry");

displayEntryKeys.forEach(key => {
  key.addEventListener("click", () => {
    let addContent = (key.getAttribute("id"));
    if (content.length >= 20) {return};
    if (content.includes(".") && addContent === ".") {return};
    content = content.concat(addContent);
    updateDisplay(content);
  })  
})

function updateDisplay(content) {
  let addContent = document.createTextNode(content.toString());
  displayContent.textContent = "";
  displayContent.appendChild(addContent);
}

