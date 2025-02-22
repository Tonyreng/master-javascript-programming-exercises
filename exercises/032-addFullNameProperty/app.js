function addFullNameProperty(obj) {
  // Add your code after this line
  obj.fullName = `${obj.firstName} ${obj.lastName}`;

  return obj;
}

let person = {
  firstName: 'Anthony',
  lastName: 'Rengifo'
};

addFullNameProperty(person);

console.log(person.fullName);