// Напишите функцию merge, которая будет принимать на вход несколько объектов (любое количество), и возвращать
// единственный объект, содержащий все поля из всех объектов. Если одно и то же поле было в нескольких объектах,
// необходимо оставить значение, которое встретилось раньше.

const merge = (...args: object[]): object => {
    let result: object = {};
    let arg: object = {};
    for (arg of args) {
        // Object.entries(arg)
    }

    return result;
}
