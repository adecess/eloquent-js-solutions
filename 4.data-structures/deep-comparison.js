const deepEqual = (obj1, obj2) => {
    if ((typeof obj1 === "object" && obj1 !== null) && (typeof obj2 === "object" && obj2 !== null)) {
        if (Object.keys(obj1).length === Object.keys(obj2).length) {
            for (var property in obj1) {
                if (!obj2.hasOwnProperty(property)) {
                    return false;
                }
                if (!deepEqual(obj1[property], obj2[property])) {
                    return false;
                }
            }
        } else return false;
    } else return obj1 === obj2;
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));