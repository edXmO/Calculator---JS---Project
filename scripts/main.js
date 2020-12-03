// Stores Value of keyPressed
var valueKeyPressed;


// Function to store the id of the button pressed:
function onKeyPress() {
    document.addEventListener('click', (e) => {
        valueKeyPressed = e.target.value;
        displayNumber(valueKeyPressed);
    }, false);
}

// Clicking on button displays that button's value on screen
// Note: valueKeyPressed comes back as string, parseInt first to make any operations
function displayNumber(elem) {
    document.getElementById('display').value += elem;
}


// Clear screen of input, return display to 0. Bug: Currently showing two zeros instead of one
function clearScreen() {
    document.getElementById('display').value = document.getElementById('clear').value;
}

function add() {
    return
}

function subtract() {
    return
}

function multiply() {
    return
}

function divide() {
    return
}

function equals() {
    return
}

