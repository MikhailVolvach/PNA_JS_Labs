const flatten = (arr: any[]) => {
    const result: any[] = [];
    const stack = [...arr];

    while(stack.length) {
        const next = stack.pop();

        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            result.push(next);
        }
    }

    return result.reverse();
};

console.log(flatten([1, 2, 3, [4, 5, 6, [10, 20, 30]]]));