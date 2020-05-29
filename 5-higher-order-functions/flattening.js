const flatten = (arr) => {
    return arr.reduce((acc, curr) => acc.concat(curr), []);
};

console.log(flatten([[1, 2, 3], [4, 5], [6]]));