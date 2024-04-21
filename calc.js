const result = document.getElementById('result');

$("button").click(function() {
    var pressedButton = $(this).val();
    result.value = pressedButton;
});