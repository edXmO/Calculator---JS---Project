// Stores value of keyPressed
const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculator__keyPressed")
const display = document.querySelector(".calculator__display")

// Function to store the id of the button pressed:
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        // Checking what type of key was clicked with data-action attribute
        const key = e.target;
        const action = key.dataset.action;
        // Storing the value of key pressed on keyContent
        // Storing the value of the displayed number on displayNum
        const keyContent = key.textContent;
        const displayNum = display.textContent;
        // If button pressed is not an operator:
        if (!action) {
            // If calc display == 0, replace display text with pressed key 
            if (displayNum === '0') {
                display.textContent = keyContent;
                // Else, append != 0 number to the current number on display
            } else {
                display.textContent = displayNum + keyContent;
            }
        }
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            console.log('operator key pressed')
        }
        if (action === 'decimal') {
            console.log('decimal key pressed')
        }
        if (action === 'clear') {
            console.log('clear key pressed')
        }
        if (action === 'calculate') {
            console.log('equal key pressed')
        }
    }
})


// Clicking on button displays that button's value on screen
// Note: valueKeyPressed comes back as string, parseInt first to make any operations
// function displayNumber(elem) {
//     document.getElementById('display').value += elem;
// }


// // Clear screen of input, return display to 0. Bug: Currently showing two zeros instead of one
// function clearScreen() {
//     document.getElementById('display').value = document.getElementById('clear').value;
// }


