const range = (start, end, step = 1) => {
    let arr = [];
    if (step < 0) {
        for (var i = start; i >= end; i += step) {
            arr.push(i);
        }
        return arr;
    }
    for (var i = start; i <= end; i += step) {
        arr.push(i);
    }
    return arr;
}

const sum = (arr) => {
    return arr.reduce((acc, curr) => acc + curr);
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));

console.log(range(1, 10, 2));
console.log(sum(range(1, 10, 2)));

console.log(range(5, 2, -1));
console.log(sum(range(5, 2, -1)));