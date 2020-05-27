const reverseArray = (arr) => {
    let newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const reverseArrayInPlace = (arr) => {
    let swapValue;
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {
        swapValue = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = swapValue;
    }
    return arr;
}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));