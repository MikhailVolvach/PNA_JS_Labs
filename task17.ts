const uniqueSum = (arr: number[]) => {
    arr = Array.from(new Set(arr));

    let sum: number = 0;
    for (const number of arr) {
        sum += number;
    }

    return sum;
}

console.log(uniqueSum([1, 1, 2, 3, 5, 3]));