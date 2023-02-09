const averArithm = (arr: number[]) => {
    let sum = 0;

    for (const number of arr) {
        if (typeof number !== 'number') {
            throw new Error('INVALID_ARGUMENT_IN_ARRAY');
        }

        sum += number;
    }

    return sum / arr.length;
}