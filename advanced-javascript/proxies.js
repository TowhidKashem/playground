// Proxies let us listen in on data structure changes on objects

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

'name' in person; // "has() called"

delete person.name; // "deleteProperty() called"
