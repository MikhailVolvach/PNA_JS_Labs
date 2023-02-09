const segments = (arr: number[]): string => {
    let segment: number[] = [arr[0]];
    let tmp: number = arr[0];
    let result = '';

    for (let i = 1; i < arr.length + 1; i++) {
        if (arr[i] - tmp === 1) {
            segment.push(arr[i]);
        } else {
            if (segment.length > 1) {
                result += segment[0] + '-' + segment[segment.length - 1] + ', ';
            } else {
                result += segment[0] + ', ';
            }

            segment = [arr[i]];
        }

        tmp = arr[i];
    }

    return result.slice(0, result.length - 2);
}

console.log(segments([1,2,3,5,6,7, 10, 11, 12, 14, 16,17, 18]));
