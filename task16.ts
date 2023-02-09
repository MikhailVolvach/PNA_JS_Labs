const matrixSumDiag = (arr: number[][]) => {
    const matrixSize: number = arr.length;
    let sum: number = 0;
    for (let i = 0; i < matrixSize; i++) {
        sum += arr[i][i] + arr[i][matrixSize - 1 - i];
    }

    if (matrixSize % 2 === 1) {
        sum -= arr[(matrixSize - matrixSize % 2) / 2][(matrixSize - matrixSize % 2) / 2];
    }

    return sum;
}

console.log(matrixSumDiag([[1,2,3], [4,5,6], [7,8,9]]));