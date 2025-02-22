function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  return person.age >= 18 ? true : false;
}

let obj = {
  age: 19,
};

console.log(isPersonOldEnoughToVote(obj));