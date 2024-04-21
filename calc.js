const result = document.getElementById('result');

$("button").click(function() {
    var pressedButton = $(this).val();
    if (pressedButton == "=") {
        result.value = "";
    } else if (pressedButton == "C") {
        result.value = "";
    } else {
        result.value = pressedButton;
    }
});