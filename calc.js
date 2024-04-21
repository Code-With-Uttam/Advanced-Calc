const result1 = document.getElementById('result1');

$("button").click(function() {
    var pressedButton = $(this).val();
    var firstDigit;
    var secondDigit;
    if (pressedButton == "=") {
        secondDigit = result.value;
        result1.value = "";
    } else if (pressedButton == "C") {
        result1.value = "";
    } else if (pressedButton == "+") {
        firstDigit = result1.value;
        result1.value += "+";
        alert(firstDigit);
        if (pressedButton == "=") {
            secondDigit = result.value;
            alert(secondDigit)
            result1.value = "";
        }
    } else {
        result1.value += pressedButton;
    }
});