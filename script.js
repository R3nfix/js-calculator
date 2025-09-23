'use strict';

function calculator() {
const fieldElement = document.querySelector('[data-display]');
const buttonElements = document.querySelectorAll('[data-button]');

    buttonElements.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.getAttribute('data-button');

            if (buttonValue === 'AC') {
                fieldElement.value = '';
            } else if (buttonValue === '+/-') {
                fieldElement.value = '-' + fieldElement.value;
            } else if (buttonValue === '%') {
                const number = parseFloat(fieldElement.value);
                fieldElement.value = (number / 100).toString();
            } else if (buttonValue === '=') {
                const expression = fieldElement.value;
                const operators = ['/', '*', '+', '-'];
                let operator = null;

                for (const op of operators) {
                    if (expression.includes(op)) {
                        operator = op;
                        break;
                    }
                }

            if (operator) {
                const parts = expression.split(operator);
                const firstNum = parseFloat(parts[0]);
                const secondNum = parseFloat(parts[1]);

                let result;
            
            switch(operator) {
                case '+':
                result = firstNum + secondNum;
                break;

                case '-':
                result = firstNum - secondNum;
                break;

                case '*':
                result = firstNum * secondNum;
                break;

                case '/':
                if (secondNum === 0) {
                    result = "Ошибка!";
                } else { 
                    result = firstNum / secondNum;
                    fieldElement.value = result;
                }

                break;

                default:
                result = 'Ошибка!';
            }

            fieldElement.value = result;
        }
        } else {
            fieldElement.value += buttonValue;
        }

        });
    });
}

calculator();