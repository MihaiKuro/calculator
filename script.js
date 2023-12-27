const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.calc-button');
let clearButton = document.getElementById('clear-button');

let screenValue = '';
let previousOperator = '';
let previousValue = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;

        if(buttonText <= 9 && buttonText >= 0){
            screenValue += buttonText;
            screen.innerText = screenValue;

        } else if (buttonText === 'C' || buttonText === 'AC'){
            screenValue = '';
            screen.innerText = screenValue;
            previousValue = '';
            previousOperator = '';  

        } else if (buttonText === '+/-'){
            screenValue = -screenValue;
            screen.innerText = screenValue;

        } else if (buttonText === '%'){
            screenValue = screenValue / 100;
            screen.innerText = screenValue;

        } else if (buttonText === '+' || buttonText === '-' || buttonText === 'x' || buttonText === '÷'){
            if(previousValue){
                screenValue = calculate(previousValue, screenValue, previousOperator);
                screen.innerText = screenValue;
            }
            previousOperator = buttonText;
            previousValue = screenValue;
            screenValue = '';
            
        } else if (buttonText === '='){
            screenValue = calculate(previousValue, screenValue, previousOperator);
            screen.innerText = screenValue;

        } else if (buttonText === '.'){
            if(!screenValue.includes('.')){
                screenValue += '.';
                screen.innerText = screenValue;
            }
        }
        if (buttonText <= 9 && buttonText >= 0 || screenValue !== '' || previousOperator !== '') {
            clearButton.textContent = 'C';
        } else {
            clearButton.textContent = 'AC';
        }
    });});

function calculate(previousValue, screenValue, previousOperator){
    
    switch (previousOperator) {
        case '+':
        result = parseFloat(previousValue) + parseFloat(screenValue);
        break;
        case '-':
        result = parseFloat(previousValue) - parseFloat(screenValue);
        break;
        case 'x':
        result = parseFloat(previousValue) * parseFloat(screenValue);
        break;
        case '÷':
        result = parseFloat(previousValue) / parseFloat(screenValue);
        break;
        default:
        break;
    }
    return result;
}

