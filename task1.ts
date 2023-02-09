// Напишите функцию merge, которая будет принимать на вход несколько объектов (любое количество), и возвращать
// единственный объект, содержащий все поля из всех объектов. Если одно и то же поле было в нескольких объектах,
// необходимо оставить значение, которое встретилось раньше.

const merge = (...args: object[]): object => {
    let result = new Map();
    let arg: object = {};

    for (arg of args) {
        Object.entries(arg).forEach(([argKey, argValue]) => {
            if (!result.has(argKey)) {
                result.set(argKey, argValue);
            }
        });
    }

    return result;
}

const obj1 = {1: "F", 2: "A"}
const obj2 = {1: "ADA", 3: "adfadfa"}
const obj3 = {23: "afaf"};
console.log(merge(obj1, obj2, obj3));