function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (let prop in obj) {
    obj[prop].length > num ? delete obj[prop] : obj[prop];
  }

  return obj;
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
