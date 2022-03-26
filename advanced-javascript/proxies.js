// Proxies let us listen in on data structure changes

// Object
const person = new Proxy(
  {},
  {
    set: function (obj, prop, value) {
      console.log('new value set in obj');
      obj[prop] = value;
      return true;
    },
    get: function (obj, key) {
      console.log('value retrieved from obj');
      return obj[key];
    }
  }
);

person.name = 'John';

console.log(person.name);
