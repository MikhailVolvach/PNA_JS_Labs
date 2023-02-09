const isPalindrom = (str: string): boolean => {
    const symbs: string[] = [',', '.', '/', '"', "'", ';', ':', " ", ''];
    let symb: string = '';
    let arr: string[] = [];

    for (symb of symbs) {
        arr = str.split(symb);
        str = arr.join('');
    }

    let i: number;
    for (i = 0; i < arr.length / 2; i++) {
        if (arr[i].toLowerCase() !== arr[arr.length - 1 - i].toLowerCase()) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrom("А роза упала на лапу Азора"));
console.log(isPalindrom("121"));
console.log(isPalindrom("122"));