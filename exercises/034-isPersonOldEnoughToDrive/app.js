function isPersonOldEnoughToDrive(person) {
  // Add your code after this line
  return person.age >= 16 ? true : false;  
}

let obj = {
  age: 16
};

console.log(isPersonOldEnoughToDrive(obj));