// Make an object out of a list of key/value pairs
const entries = [
  ['name', 'TK'],
  ['age', 33]
];

const person = Object.fromEntries(entries);

console.log(person); // { name: 'TK', age: 33 }

//*--------------------------------------

// Get a list of key/value pairs from an object
const cat = {
  name: 'Penny',
  age: 2
};

console.log(Object.entries(cat)); // [ [ 'name', 'Penny' ], [ 'age', 2 ] ]

//*--------------------------------------

// Get an array of keys and values from an object
console.log('keys:', Object.keys(cat)); // [ 'name', 'age' ]
console.log('values:', Object.values(cat)); // [ 'Penny', 2 ]
