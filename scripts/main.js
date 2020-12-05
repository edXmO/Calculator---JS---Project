// Stores value of keyPressed
const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculator__keyPressed")
const display = document.querySelector(".calculator__display")
//Calculate function, takes 3 args, performs operations
const operate = (num1, operator, num2) => {
    let result = '';
    //Because values from num1 and num2 come from button press and are value-type strings
    //convert strings to floats by parseFloat
    if (operator == 'add') {
        result = parseFloat(num1) + parseFloat(num2);
    } else if (operator === 'subtract') {
        result = parseFloat(num1) - parseFloat(num2);
    } else if (operator === 'divide') {
        result = parseFloat(num1) / parseFloat(num2);
    } else if (operator === 'multiply') {
        result = parseFloat(num1) * parseFloat(num2);
    }
    return result;
}
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
        const previousKeyType = calculator.dataset.previousKeyType;

        // If button pressed is not an operator:
        if (!action) {

            // If calc display == 0, replace display text with pressed key 
            // or previousKeyType is operator, replace display with new pressed number
            if (displayNum === '0' || previousKeyType === 'key--operator') {
                display.textContent = keyContent
                calculator.dataset.previousKeyType = 'not--operator'
                // Else, append != 0 number to the current number on display
            } else {
                display.textContent = displayNum + keyContent
            }
            Array.from(document.getElementsByClassName('operator')).forEach(el => el.classList.remove('is-depressed'));
        }
        // If button pressed is an operator:
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            // To acknowledge the previous and next value
            // adding the class is depressed so the operator is highlighted
            key.classList.add('.is-depressed');
            // Updating the display to the pressed key, first recognise 
            // if previous key is an operator key.
            // Adding custom attribute => data-previous-key-type
            calculator.dataset.previousKeyType = 'key--operator';
            calculator.dataset.firstValue = displayNum;
            calculator.dataset.operator = action;
        }
        if (action === 'decimal') {
            display.textContent = displayNum + '.'
            console.log('decimal key pressed')
        }
        if (action === 'clear-display') {
            console.log('clear key pressed')
        }
        if (action === 'operate') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayNum

            display.textContent = operate(firstValue, operator, secondValue)
            console.log('equal key pressed')
        }
        // Removing the .is-depressed class from buttons so we can introduce
        // the next number of the operation
    }
})



