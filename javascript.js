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
let num1 = 0;
let num2 = 0;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (emptyString.length < 11) {
      emptyString += button.textContent;
    }

    textBar.textContent = emptyString;
  });
});

plus.addEventListener("click", plusFunction);

function plusFunction() {
  num1 = parseFloat(emptyString);
  console.log(num1);
  textBar.textContent = `+${num1}`;
  emptyString = "";
  console.log(num1);
}

equals.addEventListener("click", equalsFunction);
function equalsFunction() {
  console.log(num1);
  let num2 = parseFloat(emptyString);
  console.log(num2);
  let total = num1 + num2;
  console.log(total);
  textBar.textContent = total;
  emptyString = total;
}

clear.addEventListener("click", clearEverything);
function clearEverything() {
  emptyString = "";
  textBar.textContent = "0";
  num1 = 0;
  num2 = 0;
}
