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