// Made mostly by @BwnnyRxbbit and advance operations are being done by @Code-With-Uttam

const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
let firstDigit;
let secondDigit;
let sum;

$("button").click(function() {
    var pressedButton = $(this).val();
    var firstNumberEntered = false;
    if (pressedButton == "=") {
        secondDigit = result1.value;
        var operation = secondDigit[0];
        console.log(operation);
        secondDigit = secondDigit.substring(1);
        console.log(firstDigit);
        console.log(secondDigit);
        result1.value = "=";
        if (operation == "+") {
            sum = +firstDigit + +secondDigit;
        } else if (operation == "-") {
            sum = firstDigit - secondDigit;
        } else if (operation == "÷") {
            sum = firstDigit / secondDigit;
        } else if (operation == "x") {
            sum = firstDigit * secondDigit;
        } else if (operation == "%") {
            sum = firstDigit * secondDigit / 100;
        } else if (operation == "xⁿ") {
            sum = Math.pow(firstDigit, secondDigit);
        } else if (operation == "√¯¯") {
            sum = Math.sqrt(firstDigit, secondDigit);
        } else {
            sum = firstDigit / secondDigit;
        }
        result2.value = sum;
        console.log(sum);
    } else if (pressedButton == "C") {
        result1.value = "";
        result2.value = "";
    } else if (pressedButton == "+" || pressedButton == "-" || pressedButton == "x" || pressedButton == "÷"){
        firstDigit = result1.value;
        result1.value = pressedButton;
        firstNumberEntered = true;
    } else if (pressedButton == "abs") {
        let abs = window.prompt("clicked");
        absAnswer = Math.abs(abs);
        pressedButton = absAnswer;
        result1.value += pressedButton;
    } else {
        result1.value += pressedButton;
    }
});

function randomNumber() {
    let number = window.prompt("Generating random number between 1 and ...");
    alert(Math.floor(Math.random() * number) + 1);
}

function darkmode() {
    document.body.classList.toggle("darkmode");
}