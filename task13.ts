const diff = (arr1: any[], arr2: any[]): any[] => {
    let elem: any;
    const result: any[] = [];
    for (elem of arr1) {
        if (!arr2.includes(elem)) {
            result.push(elem);
        }
    }


    return result;
}

console.log(diff([1, 2, 3, 4], [1, 2, 6, 9]))