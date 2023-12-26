const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.calc-button');

let screenValue = '';
let previousOperator = '';
let previousValue = '';

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}
foreach(button => {
    button.addEventListener('click', () => buttonClick(button.value));
    
    
});
function updateScreen(value) {
    screenValue = value;
    screen.textContent = value;
}

function handleNumber(value) {
    screenValue += value;
    updateScreen(screenValue);
}

function handleSymbol(value) {
    if (previousOperator) {
        handleCalculation();
    }
    previousOperator = value;
    previousValue = screenValue;
    screenValue = '';
}

function handleCalculation(value) {
    const currentValue = parseFloat(screenValue);
    const valueToUse = parseFloat(previousValue);

    switch (previousOperator) {
        case '+':
            screenValue = valueToUse + currentValue;
            break;
        case '-':
            screenValue = valueToUse - currentValue;
            break;
        case '*':
            screenValue = valueToUse * currentValue;
            break;
        case '/':
            screenValue = valueToUse / currentValue;
            break;
        default:
            return;
    }
    previousOperator = '';
    updateScreen(screenValue);
}
