const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let currentOperator = '';
let firstOperand = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value >= '0' && value <= '9') {
            currentInput += value;
            display.value = currentInput;
        } else if (button.classList.contains('C')) {
            clearCalculator();
        } else if ('+-*/'.includes(value)) {
            if (currentOperator === '') {
                firstOperand = currentInput;
                currentInput = '';
                currentOperator = value;
            } else {
                firstOperand = evaluate();
                currentInput = '';
                currentOperator = value;
            }
        } else if (button.classList.contains('equal')) {
            if (currentOperator && currentInput) {
                display.value = evaluate();
            }
        }
    });
});

function evaluate() {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(currentInput);
    switch (currentOperator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num2;
    }
}

function clearCalculator() {
    currentInput = '';
    currentOperator = '';
    firstOperand = '';
    display.value = '';
}