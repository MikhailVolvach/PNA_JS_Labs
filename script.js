// const calculatorButtons = document.querySelector(".calculator__buttons");
//
// let result = 0;
// calculatorButtons.addEventListener("click", (event) => {
//
// });
//
// // console.log(calculatorButtons);

/**
 * Фильтрует ввод значений в input с клавиатуры
 * @param event
 */
const filterInput = (event) => {
    const key = event.key;

    if (!((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '/' || key === '*' || key === '%' || key === 'c' || key === 'с' || key === 'Backspace' || key === '=' || key === '.')) {
        event.preventDefault();
    }
}

const addOperation = (x, operation) => {
    if (x === '') {
        return;
    }

    selectedOperation = operation;
    result.value = operation;
}

window.onload = function () {
    const clear = document.querySelector(".calculator__button--clear");
    const result = document.querySelector(".calculator__result");
    const backspace = document.querySelector(".calculator__button--backspace");
    const digits = document.querySelectorAll(".calculator__button--digit");
    const plus = document.querySelector(".calculator__button--plus");
    const minus = document.querySelector(".calculator__button--minus");
    const div = document.querySelector(".calculator__button--div");
    const percent = document.querySelector(".calculator__button--percent");
    const resultButton = document.querySelector(".calculator__button--result");
    const mult = document.querySelector(".calculator__button--mult");

    const RESULT_MAX_LENGTH = 16;

    let x = '';
    let y = '';
    let selectedOperation = null;
    let expressionResult = '';
    let digitValue;

    // result.addEventListener('click', (event) => {
    //     event.preventDefault();
    // })
    result.value = 0;


    const getResult = () => {
        if (x === '' || y === '' || !selectedOperation) {
            return;
        }

        switch (selectedOperation) {
            case '*':
                expressionResult = (+x) * (+y);
                break;
            case '+':
                expressionResult = (+x) + (+y);
                break;
            case '-':
                expressionResult = (+x) - (+y);
                break;
            case '/':
                expressionResult = (+x) / (+y);
                break;
            case '%':
                expressionResult = (+x) % (+y);
                break;

        }

        x = expressionResult.toString();
        y = '';
        selectedOperation = null;

        result.value = x;
    }

    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit !== '.') || (digit === '.' && !a.includes(digit))) {
                if (result.value.length > RESULT_MAX_LENGTH) {
                    return;
                }
                x += digit;
            }
            result.value = x;
        } else {
            if ((digit !== '.') || (digit === '.' && !b.includes(digit))) {
                if (result.value.length > RESULT_MAX_LENGTH) {
                    return;
                }
                y += digit;
                result.value = y;
            }
        }
    }



    digits.forEach((button) => {
        button.addEventListener("click", () => {
            digitValue = button.innerHTML;
            onDigitButtonClicked(digitValue);
        })
    });

    addEventListener('keydown', (event) => {
        filterInput(event);

        digitValue = event.key;
        if (digitValue >= '0' && digitValue <= '9') {
            onDigitButtonClicked(digitValue);
        }

        if (digitValue === '+') {
            if (x === '') {
                return;
            }
            selectedOperation = '+';
            result.value = '+';
        }

        if (digitValue === '-') {
            if (x === '') {
                return;
            }
            selectedOperation = '-';
            result.value = '-';
        }

        if (digitValue === '*') {
            if (x === '') {
                return;
            }
            selectedOperation = '*';
            result.value = '*';
        }

        if (digitValue === '/') {
            if (x === '') {
                return;
            }
            selectedOperation = '/';
            result.value = '/';
        }

        if (digitValue === 'c' || digitValue === 'с') {
            x = '';
            y = '';
            selectedOperation = '';
            expressionResult = '';
            result.value = 0;
        }

        if (digitValue === 'Backspace') {
            if (x === '') {
                return;
            }
            if (!selectedOperation) {
                // result.value = '';
                x = x.slice(0, x.length - 1);
                result.value = x;
                return;
            }
            if (y === '') {
                result.value = '';
                selectedOperation = '';
                return;
            }
            y = y.slice(0, y.length - 1);
            result.value = y;
        }

        if (digitValue === 'Enter') {
            getResult();
        }
    });

    clear.addEventListener("click", () => {
        x = '';
        y = '';
        selectedOperation = '';
        expressionResult = '';
        result.value = 0;
    });

    backspace.addEventListener("click", () => {
        if (x === '') {
            return;
        }
        if (!selectedOperation) {
            // result.value = '';

            x = x.slice(0, x.length - 1);
            if (x.length === 0) {
                x = 0;
            }
            result.value = x;
            return;
        }
        if (y === '') {
            result.value = '';
            selectedOperation = '';
            return;
        }
        y = y.slice(0, y.length - 1);
        if (y.length === 0) {
            result.value = 0;
        }
        result.value = y;
    });

    plus.addEventListener("click", () => {
        if (x === '') {
            return;
        }
        selectedOperation = '+';
        result.value = '+';
    });


    minus.addEventListener("click", () => {
        if (x === '') {
            return;
        }
        selectedOperation = '-';
        result.value = '-';
    });

    mult.addEventListener("click", () => {
        if (x === '') {
            return;
        }
        selectedOperation = '*';
        result.value = '*';
    });

    div.addEventListener("click", () => {
        if (x === '') {
            return;
        }
        selectedOperation = '/';
        result.value = '/';
    });

    percent.addEventListener("click", () => {
        if (x === '') {
            return;
        }
        selectedOperation = '%';
        result.value = '%';
    });


    resultButton.addEventListener("click", () => {
        getResult();
    });
}

