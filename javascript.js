// let choice = prompt("would you like to add, subtract, multiply, or divide?");
// let num1 = parseFloat(prompt("enter your first number"));
// let num2 = parseFloat(prompt("enter your second number"));

if (choice == "add") {
  add(num1, num2);
} else if (choice == "subtract") {
  subtract(num1, num2);
} else if (choice == "multiply") {
  multiply(num1, num2);
} else if (choice == "divide") {
  divide(num1, num2);
}

function add(num1, num2) {
  console.log(num1 + num2);
}

function subtract(num1, num2) {
  console.log(num1 - num2);
}

function multiply(num1, num2) {
  console.log(num1 * num2);
}

function divide(num1, num2) {
  console.log(num1 / num2);
}
