// Make a deep copy of an object with serializable values
const penny = {
  name: 'Penny',
  info: {
    sex: 'female',
    breed: 'Balinese'
  }
};

const leo = JSON.parse(JSON.stringify(penny));

leo.name = 'Leo';
leo.info.sex = 'male';

console.log(leo.info.sex); // "male"
console.log(penny.info.sex); // "female" (Deep copy unaffected original)

//*--------------------------------------

// structuredClone() also only works on objects with serializable values and isn't as fast as the JSON method
const penny2 = {
  info: {
    breed: 'Balinese'
  }
};

const magpie = structuredClone(penny2);

magpie.info.breed = 'Mutt';

console.log(magpie.info.breed); // "Mutt"
console.log(penny2.info.breed); // "Balinese"

//*--------------------------------------

// Recursive util function that works on any data type
function copy(obj) {
  // Prevent undefined objects
  if (!obj) return obj;

  let clone = Array.isArray(obj) ? [] : {};

  let value;
  for (const key in obj) {
    // Prevent self-references to parent object
    if (Object.is(obj[key], obj)) continue;

    value = obj[key];

    clone[key] = typeof value === 'object' ? copy(value) : value;
  }

  return clone;
}

const man = {
  name: 'John Doe',
  age: 33,
  info: {
    greeting: function () {
      return 'Hello';
    },
    friends: ['Sam', 'Jill']
  }
};

const woman = copy(man);

woman.info.friends.push('Jack');

console.log(man.info.friends); // ["Sam", "Jill"]
console.log(woman.info.friends); // ["Sam", "Jill", "Jack"]
console.log(man.info.greeting()); // "Hello"
