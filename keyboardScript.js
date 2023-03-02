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

const keydownEvent = (event) => {
    filterInput(event);

    let a = '';
    const key = event.key;

    if (key >= '0' && key <= '9') {
        a += key;
    }



    if ((key === '+' || key === '-') && a !== '') {
        a = key + a;
    }
}

window.onload = function () {
    const result = document.querySelector(".calculator__result");

    result.value = 0;
    result.addEventListener('keydown', keydownEvent);

}
