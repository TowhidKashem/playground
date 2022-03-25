// Check if 2 references are to the same object
// `obj1 === obj2` works too
const person = {
  name: 'John',
  age: 30
};

const personRef = person;
const personCopy = { ...person };

console.log(Object.is(person, personRef)); // true
console.log(person === personRef); // true

console.log(Object.is(person, personCopy)); // false
console.log(Object.is({}, {})); // false

// Same effect on arrays
const pets = ['cat', 'dog', 'bird'];

const petsRef = pets;

console.log(Object.is(pets, petsRef)); // true
console.log(Object.is([], [])); // false
