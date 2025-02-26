let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
    for (let prop in obj) {
        obj[prop] > num ? delete obj[prop] : obj[prop];
    }
    return obj;
}

console.log(removeNumbersLargerThan(5, obj));
