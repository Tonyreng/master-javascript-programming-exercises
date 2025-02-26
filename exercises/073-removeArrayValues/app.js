function removeArrayValues(obj) {
    // your code here
    for(let prop in obj) {
        Array.isArray(obj[prop]) ? delete obj[prop] : obj[prop];
    }

    return obj;
}

let obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
}

console.log(removeArrayValues(obj));