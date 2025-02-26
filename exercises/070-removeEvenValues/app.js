function removeEvenValues(obj) {
    // your code here
    for(let prop in obj) {
      obj[prop] % 2 === 0 ? delete obj[prop] : obj[prop];
    }

    return obj;
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
