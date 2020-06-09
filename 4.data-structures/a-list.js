const arrayToList = (arr) => {
    let list = {};
    for (var i = arr.length - 1; i > -1; i--) {
        if (i === arr.length - 1) {
            list.value = arr[i];
            list.rest = null;
        } else {
            list = {
                value: arr[i],
                rest: list
            }
        }
    }
    return list;
};

console.log(arrayToList([10, 20]));

const listToArray = (list) => {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

console.log(listToArray(arrayToList([10, 20, 30])));

const prepend = (num, list) => {
    return {
        value: num,
        rest: list
    };
};

console.log(prepend(10, prepend(20, null)));
