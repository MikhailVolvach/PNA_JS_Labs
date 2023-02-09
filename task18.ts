const isPermutable = (arr1: number[], arr2: number[]) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let number: number = 0;
    for (number of arr1) {
        if (!arr2.includes(number)) {
            return false;
        }
    }

    return true;
}

console.log(isPermutable([1, 2, 3, 8, -2], [2, 3, 8, 1, -2]))
