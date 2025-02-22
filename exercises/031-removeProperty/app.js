function removeProperty(obj, key) {
  // your code here
  delete obj[key];
  return obj;
}

let obj = {
  name: 'Anthony',
  age: 26,
}

removeProperty(obj, 'name');

console.log(obj.name);
