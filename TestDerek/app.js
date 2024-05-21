//reference IDs in html doc mapped to variables for elements
var number1 = document.getElementById("num1");
var PrintButton = document.getElementById("butt1");
var PrintValue = document.getElementById("enteredNumber");
function PrintEnteredValue() {
    var numb1 = parseFloat(number1.value);
    PrintValue.textContent = numb1.toString();
}
//event listener that calls function on click
PrintButton.addEventListener("click", PrintEnteredValue);
