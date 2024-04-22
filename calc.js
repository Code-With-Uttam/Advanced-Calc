const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
let firstDigit;
let secondDigit;

$("button").click(function() {
    var pressedButton = $(this).val();
    var firstNumberEntered = false;
    if (pressedButton == "=") {
        secondDigit = result1.value;
        secondDigit = secondDigit.substring(1);
        alert(secondDigit);
        console.log(firstDigit);
        console.log(secondDigit);
        result1.value = "=";
        let sum = firstDigit + secondDigit;
        result2.value = sum;
        console.log(sum);
    } else if (pressedButton == "C") {
        result1.value = "";
        result2.value = "";
    } else if (pressedButton == "+" || pressedButton == "-" || pressedButton == "x" || pressedButton == "÷"){
        firstDigit = result1.value;
        alert(firstDigit)
        result1.value = pressedButton;
        firstNumberEntered = true;
    } else {
        result1.value += pressedButton;
    }
});