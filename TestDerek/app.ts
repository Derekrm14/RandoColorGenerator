//reference IDs in html doc mapped to variables for elements
const number1 = document.getElementById("num1") as HTMLInputElement;
const PrintButton = document.getElementById("butt1") as HTMLButtonElement;
const PrintValue = document.getElementById("enteredNumber") as HTMLOutputElement;

//function that parses entered number, converts to string, and prints it
function PrintEnteredValue(): void {
    const numb1 = parseFloat(number1.value);
    PrintValue.textContent = numb1.toString();
}

//event listener that calls function on click
PrintButton.addEventListener("click", PrintEnteredValue);