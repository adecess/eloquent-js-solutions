function every(array, test) {
    for (let elem of array) {
        if (!test(elem)) {
            return false;
        }
    }
    return true;
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

function every2(array, test) {
    function negate (predicateFunc) {
        return function () {
            return !predicateFunc.apply(this, arguments);
        };
    }
    return !array.some(negate(test));
}

console.log(every2([1, 3, 5], n => n < 10));
console.log(every2([2, 4, 16], n => n < 10));
console.log(every2([], n => n < 10));