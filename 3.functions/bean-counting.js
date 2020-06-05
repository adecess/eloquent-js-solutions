const countBs = (str) => {
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'B') {
            count++
        };
    }
    return count;
}

console.log(countBs("BbC"));