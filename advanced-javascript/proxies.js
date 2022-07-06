// Proxies let us listen in on data structure changes on objects

console.log('Proxy:\n');

const person = new Proxy(
  {},
  {
    set(obj, key, value) {
      console.log('set() called');
      obj[key] = value;
    },
    get(obj, key) {
      console.log('get() called');
      return obj[key];
    },
    has(obj, key) {
      console.log('has() called');
      return key in obj;
    },
    deleteProperty(obj, key) {
      console.log('deleteProperty() called');
      delete obj[key];
    }
  }
);

person.name = 'John'; // set() called

person.name; // get() called

'name' in person; // has() called

delete person.name; // deleteProperty() called

//*--------------------------------------

console.log('\n\n\nObject.defineProperty:\n');

const human = {};
const humanData = {};

Object.defineProperty(human, 'name', {
  get() {
    console.log(`get() called, value: "${humanData.name}"`);
    return humanData.name;
  },
  set(value) {
    console.log(`set() called, value: "${value}"`);
    humanData.name = value;
  }
});

human.name = 'Joe'; // set() called, value: "Joe"

human.name; // get() called, value: "Joe"

// Using the `defineProperty` method prevents the original object from being writable
console.log('human:', human); // {}

// So we keep a second object for storing the data
console.log('humanData:', humanData); // { name: 'Joe' }

// set() is not triggered this time since `defineProperty` is set only on the `name` prop
human.age = 33;
