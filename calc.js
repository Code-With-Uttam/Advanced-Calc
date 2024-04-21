const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');

$("button").click(function() {
    var pressedButton = $(this).val();
    var firstDigit;
    var secondDigit;
    if (pressedButton == "=") {
        secondDigit = result.value;
        result1.value = "";
    } else if (pressedButton == "C") {
        result1.value = "";
    } else {
        result1.value += pressedButton;
    }
});