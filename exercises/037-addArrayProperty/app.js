function addArrayProperty(obj, key, arr) {
  // Add your code after this line
  obj[key] = arr;
  return obj;
}

let obj = {};

let myArr = [1, 3];

addArrayProperty(obj, 'newProperty', myArr);

console.log(obj.newProperty);