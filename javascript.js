const clear = document.querySelector(".clear");
const plusMinus = document.querySelector(".plus-minus");
const percentage = document.querySelector(".percentage");
const divide = document.querySelector(".divide");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const multiply = document.querySelector(".multiply");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const minus = document.querySelector(".minus");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
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
  "-": (a, b) => a - b,
  "/": (a, b) => a / b,
  "*": (a, b) => a * b,
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
  operator = "+";
  if (num1 == null) {
    num1 = parseFloat(emptyString);
    total = num1;
  } else if (num1 != null && emptyString != "") {
    num2 = parseFloat(emptyString);
    total = operators["+"](num1, num2);
    num1 = total;
  } else if (emptyString == "") {
    total += total;
    textBar.textContent = total;
  }
  emptyString = "";
  textBar.textContent = total;
}

minus.addEventListener("click", subtractNumbers);

function subtractNumbers() {
  operator = "-";
  if (num1 == null) {
    num1 = parseFloat(emptyString);
    total = num1;
  } else if (num1 != null && emptyString != "") {
    num2 = parseFloat(emptyString);
    total = operators["-"](num1, num2);
    num1 = total;
  } else if (emptyString == "") {
    total += total;
    textBar.textContent = total;
  }
  emptyString = "";
  textBar.textContent = total;
}

divide.addEventListener("click", divideNumbers);

function divideNumbers() {
  operator = "/";
  if (num1 == null) {
    num1 = parseFloat(emptyString);
    total = num1;
  } else if (num1 != null && emptyString != "") {
    num2 = parseFloat(emptyString);
    total = operators["/"](num1, num2);
    num1 = total;
  } else if (emptyString == "") {
    total += total;
    textBar.textContent = total;
  }
  emptyString = "";
  textBar.textContent = total;
}

multiply.addEventListener("click", multiplyNumbers);

function multiplyNumbers() {
  operator = "*";
  if (num1 == null) {
    num1 = parseFloat(emptyString);
    total = num1;
  } else if (num1 != null && emptyString != "") {
    num2 = parseFloat(emptyString);
    total = operators["*"](num1, num2);
    num1 = total;
  } else if (emptyString == "") {
    total += total;
    textBar.textContent = total;
  }
  emptyString = "";
  textBar.textContent = total;
}

equals.addEventListener("click", equalsFunction);
function equalsFunction() {
  if (num1 != null && operator == "+") {
    num2 = parseFloat(emptyString);
    total = operators["+"](num1, num2);
    textBar.textContent = total;
  }
  if (num1 != null && operator == "-") {
    num2 = parseFloat(emptyString);
    total = operators["-"](num1, num2);
    textBar.textContent = total;
  }
  if (num1 != null && operator == "/") {
    num2 = parseFloat(emptyString);
    total = operators["/"](num1, num2);
    textBar.textContent = total;
  }
  if (num1 != null && operator == "*") {
    num2 = parseFloat(emptyString);
    total = operators["*"](num1, num2);
    textBar.textContent = total;
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
