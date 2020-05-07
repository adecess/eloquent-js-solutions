function isEven(N) {
    if(N === 0) {
        return true;
    } else if (N === 1) {
        return false;
    } else {
        return N > 0 ? isEven(N - 2) : isEven(N + 2);
    }
}

console.log(isEven(57));
console.log(isEven(75));