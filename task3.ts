const inverse = (arr: any[], index: number = 0) => {
    if (index < 0) {
        throw new Error('INVALID_ARGUMENT');
    }
    let tmp: any;
    let firstPartOfArr: any[] = [];
    let secondPartOfArr: any[] = [];

    firstPartOfArr = arr.slice(0, index);
    secondPartOfArr = arr.slice(index);

    let arrLength: number = secondPartOfArr.length;
    let lastIndex: number = arrLength - 1;

    let i: number;
    for (i = 0; i < (arrLength) / 2; i++) {
        tmp = secondPartOfArr[i];
        secondPartOfArr[i] = secondPartOfArr[lastIndex - i];
        secondPartOfArr[lastIndex - i] = tmp;
    }

    return firstPartOfArr.concat(secondPartOfArr);
}

console.log(inverse([1, 2, 3, 4, 5], 3));