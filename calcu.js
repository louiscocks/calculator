//empty variables
var operator = "";
var number1 = null;
var number2 = null;

//number in the screen
function addNumber(i) {
var screen = document.getElementById('screen');
screen.value = screen.value + i;
number2 = screen.value;
}

//add operator and check if number is empty
function addOperator(value) {
var screen = document.getElementById('screen');
screen.value = "";
operator = value;
if (number1 != null) {
if (operator == "+") {
               number1 = Number(number1) + Number(number2);
}
if (operator == "-") {
               number1 = Number(number1) - Number(number2);
}
if (operator == "*") {
               number1 = Number(number1) * Number(number2);
}
if (operator == "/") {
               number1 = Number(number1) / Number(number2);
}
} else {
number1 = number2;
}
}

//get the answer
function e() {
var screen = document.getElementById('screen');
screen.value = "";
if (operator == "+") {
               screen.value = Number(number1) + Number(number2);
}
if (operator == "-") {
               screen.value = Number(number1) - Number(number2);
}
if (operator == "*") {
               screen.value = Number(number1) * Number(number2);
}
if (operator == "/") {
               screen.value = Number(number1) / Number(number2);
}
}

//empty the calculator 
function c() {
var screen = document.getElementById('screen');
operator = "";
number1 = null;
number2 = null;
screen.value = "";
}
