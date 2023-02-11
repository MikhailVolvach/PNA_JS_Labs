// const calculatorButtons = document.querySelector(".calculator__buttons");
//
// let result = 0;
// calculatorButtons.addEventListener("click", (event) => {
//
// });
//
// // console.log(calculatorButtons);

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

    let x = '';
    let y = '';
    let selectedOperation = null;
    let expressionResult = '';
    let digitValue;

    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit !== '.') || (digit === '.' && !a.includes(digit))) {
                x += digit;
            }
            result.innerHTML = x;
        } else {
            if ((digit !== '.') || (digit === '.' && !b.includes(digit))) {
                y += digit;
                result.innerHTML = y;
            }
        }
    }

    digits.forEach((button) => {
        button.addEventListener("click", () => {
            digitValue = button.innerHTML;
            onDigitButtonClicked(digitValue);
        })
    });

    clear.addEventListener("click", () => {
        x = '';
        y = '';
        selectedOperation = '';
        expressionResult = '';
        result.innerHTML = 0;
    });

    backspace.addEventListener("click", () => {
        if (x === '') {
            return;
        }
        if (!selectedOperation) {
            result.innerHTML = '';
            x = '';
            return;
        }
        if (y === '') {
            result.innerHTML = '';
            selectedOperation = '';
            return;
        }
        result.innerHTML = '';
        y = '';
    });

    plus.addEventListener("click", () => {
        if (x === '') {
            return;
        }
        selectedOperation = '+';
        result.innerHTML = '+';
    });

    minus.addEventListener("click", () => {
        if (x === '') {
            return;
        }
        selectedOperation = '-';
        result.innerHTML = '-';
    });

    mult.addEventListener("click", () => {
        if (x === '') {
            return;
        }
        selectedOperation = 'x';
        result.innerHTML = 'x';
    });

    div.addEventListener("click", () => {
        if (x === '') {
            return;
        }
        selectedOperation = '/';
        result.innerHTML = '/';
    });

    percent.addEventListener("click", () => {
        if (x === '') {
            return;
        }
        selectedOperation = '%';
        result.innerHTML = '%';
    });


    resultButton.addEventListener("click", () => {
        if (x === '' || y === '' || !selectedOperation) {
            return;
        }

        switch (selectedOperation) {
            case 'x':
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

        result.innerHTML = x;
    });
}

