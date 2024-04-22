const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');

$("button").click(function() {
    var pressedButton = $(this).val();
    var firstDigit;
    var secondDigit;
    var firstNumberEntered = 0;
    if (pressedButton == "=") {
        secondDigit = result1.value;
        result1.value = "=";
    } else if (pressedButton == "C") {
        result1.value = "";
    } else if (pressedButton == "+" || pressedButton == "-" || pressedButton == "x" || pressedButton == "÷"){
        firstDigit = result1.value
        result1.value = pressedButton;
        firstNumberEntered = 1;
    } else {
        result1.value += pressedButton;
    }
});