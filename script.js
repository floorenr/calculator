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

let display = document.getElementById("display");

let displayContent = document.createTextNode(0);

display.appendChild(displayContent);

