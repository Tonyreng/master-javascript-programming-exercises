function addObjectProperty(obj1, key, obj2) {
  // Add your code after this line
  obj1[key] = obj2;

  return obj1;
}

let person1 = {
  name: 'Anthony Rengifo',
  role: 'Ign junior',
};

let person2 = { 
  name: 'Blanca Medina',
  role: 'Ign Senior',
};

addObjectProperty(person1, 'manager', person2);

console.log(person1.manager);