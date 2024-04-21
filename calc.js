const result = document.getElementById('result');

$("button").click(function() {
    var pressedButton = $(this).val();
    alert(pressedButton);
    result.value = pressedButton;
});