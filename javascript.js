const clear = document.querySelector(".clear");
const plusMinus = document.querySelector(".plus-minus");
const percentage = document.querySelector(".percentage");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const zero = document.querySelector(".zero");
const decimal = document.querySelector(".decimal");
const equals = document.querySelector(".equals");
const textBar = document.querySelector(".textBar");
const buttons = document.querySelectorAll(".button");

let emptyString = "";
let num1 = null;
let num2 = null;
let total = 0;
let operator = null;

let operators = {
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  "/": (num1, num2) => num1 / num2,
  "*": (num1, num2) => num1 * num2,
  "%": (total) => total * 100,
};

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (emptyString.length < 11) {
      emptyString += button.textContent;
    }
    textBar.textContent = emptyString;
  });
});
plus.addEventListener("click", addNumbers);

function addNumbers() {
  if (operator != "+" && operator == "-") {
    num2 = parseFloat(textBar.textContent);
    total = num1 - num2;
    textBar.textContent = total;
  } else if (operator != "+" && operator == "*") {
    num2 = parseFloat(textBar.textContent);
    total = num1 * num2;
    textBar.textContent = total;
  } else if (operator != "+" && operator == "/") {
    num2 = parseFloat(textBar.textContent);
    total = num1 / num2;
    textBar.textContent = total;
  }
  operator = "+";
  if (num1 == null) {
    num1 = parseFloat(emptyString);
    total = num1;
  } else if (
    num1 != null &&
    textBar.textContent == total &&
    emptyString != ""
  ) {
    num1 = parseFloat(textBar.textContent);
    emptyString = "";
  } else if (num1 != null && emptyString != "") {
    num2 = parseFloat(emptyString);
    total = operators["+"](num1, num2);
    num1 = total;
    num2 = null;
  } else if (emptyString == "") {
    total += total;
    textBar.textContent = total;
  }
  emptyString = "";
  textBar.textContent = total;
}

minus.addEventListener("click", subtractNumbers);

function subtractNumbers() {
  if (operator != "-" && operator == "+") {
    num2 = parseFloat(textBar.textContent);
    total = num1 + num2;
    textBar.textContent = total;
  } else if (operator != "-" && operator == "*") {
    num2 = parseFloat(textBar.textContent);
    total = num1 * num2;
    textBar.textContent = total;
  } else if (operator != "-" && operator == "/") {
    num2 = parseFloat(textBar.textContent);
    total = num1 / num2;
    textBar.textContent = total;
  }
  operator = "-";
  if (num1 == null) {
    num1 = parseFloat(emptyString);
    total = num1;
  } else if (
    num1 != null &&
    textBar.textContent == total &&
    emptyString != ""
  ) {
    num1 = parseFloat(textBar.textContent);
    emptyString = "";
  } else if (num1 != null && emptyString != "") {
    num2 = parseFloat(emptyString);
    total = operators["-"](num1, num2);
    num1 = total;
  } else if (emptyString == "") {
    total -= total;
    textBar.textContent = total;
  }
  emptyString = "";
  textBar.textContent = total;
}

divide.addEventListener("click", divideNumbers);

function roundToFour(number) {
  return Math.round(number * 10000) / 10000;
}

function divideNumbers() {
  if (operator != "/" && operator == "+") {
    num2 = parseFloat(textBar.textContent);
    total = num1 + num2;
    total = roundToFour(total);
    textBar.textContent = total;
  } else if (operator != "/" && operator == "*") {
    num2 = parseFloat(textBar.textContent);
    total = num1 * num2;
    total = roundToFour(total);
    textBar.textContent = total;
  } else if (operator != "/" && operator == "-") {
    num2 = parseFloat(textBar.textContent);
    total = num1 - num2;
    total = roundToFour(total);
    textBar.textContent = total;
  }
  operator = "/";
  if (num1 == null) {
    num1 = parseFloat(emptyString);
    total = num1;
  } else if (
    num1 != null &&
    textBar.textContent == total &&
    emptyString != ""
  ) {
    num1 = parseFloat(textBar.textContent);
    emptyString = "";
  } else if (num1 != null && emptyString != "") {
    num2 = parseFloat(emptyString);
    total = operators["/"](num1, num2);
    total = roundToFour(total);
    num1 = total;
  } else if (emptyString == "") {
    total /= total;
    total = roundToFour(total);
    textBar.textContent = total;
  }
  emptyString = "";
  textBar.textContent = total;
}

multiply.addEventListener("click", multiplyNumbers);

function multiplyNumbers() {
  if (operator != "*" && operator == "+") {
    num2 = parseFloat(textBar.textContent);
    total = num1 + num2;
    textBar.textContent = total;
  } else if (operator != "*" && operator == "-") {
    num2 = parseFloat(textBar.textContent);
    total = num1 - num2;
    textBar.textContent = total;
  } else if (operator != "*" && operator == "/") {
    num2 = parseFloat(textBar.textContent);
    total = num1 / num2;
    textBar.textContent = total;
  }
  operator = "*";
  if (num1 == null) {
    num1 = parseFloat(emptyString);
    total = num1;
    textBar.textContent = total;
  } else if (
    num1 != null &&
    textBar.textContent == total &&
    emptyString != ""
  ) {
    num1 = parseFloat(textBar.textContent);
    emptyString = "";
  } else if (num1 != null && emptyString != "") {
    num2 = parseFloat(emptyString);
    total = operators["*"](num1, num2);
    num1 = total;
  } else if (emptyString == "") {
    total *= total;
    textBar.textContent = total;
  }
  emptyString = "";
  textBar.textContent = total;
}
percentage.addEventListener("click", toPercentage);

function toPercentage() {
  total = total * 100;
  textBar.textContent = `%${total}`;
}

plusMinus.addEventListener("click", plusEquals);
function plusEquals() {
  if (total < 0) {
    total = textBar.textContent;
    total = +total;
    textBar.textContent = total;
  } else if (total > 0) total = -total;
  textBar.textContent = total;
}
equals.addEventListener("click", equalsFunction);
function equalsFunction() {
  if (num1 != null && operator == "+") {
    num2 = parseFloat(emptyString);
    total = operators["+"](num1, num2);
    textBar.textContent = total;
    operator = "=";
  } else if (num1 != null && operator == "-") {
    num2 = parseFloat(emptyString);
    total = operators["-"](num1, num2);
    textBar.textContent = total;
    operator = "=";
  } else if (num1 != null && operator == "/") {
    num2 = parseFloat(emptyString);
    total = operators["/"](num1, num2);
    total = roundToFour(total);
    textBar.textContent = total;
    operator = "=";
  } else if (num1 != null && operator == "*") {
    num2 = parseFloat(emptyString);
    total = operators["*"](num1, num2);
    textBar.textContent = total;
    operator = "=";
  }
}

clear.addEventListener("click", clearEverything);
function clearEverything() {
  emptyString = "";
  textBar.textContent = "0";
  num1 = null;
  num2 = null;
  total = null;
  operator = null;
}
