// Prevent changing any part of an object
const woman = Object.freeze({
  name: 'Julia'
});

// None of these will work
woman.name = 'TK';
woman.age = 18;
delete woman.name;

console.log(woman); // { name: 'Julia' }
console.log('isFrozen:', Object.isFrozen(woman)); // true

//*--------------------------------------

// Prevent adding new properties to an object
const man = Object.preventExtensions({
  name: 'TK'
});

man.age = 33; // Won't work, can't add new properties

console.log(man); // { name: 'TK' }

delete man.name; // But can still delete current properties

console.log(man); // {}
console.log('isExtensible:', Object.isExtensible(man)); // false

//*--------------------------------------

// Prevent adding or deleting properties but allow changing existing ones
const cat = Object.seal({
  name: 'Penny'
});

// These won't work
cat.age = 2;
delete cat.name;

cat.name = 'Leo'; // Works

console.log(cat); // { name: 'Leo' }
console.log('isSealed:', Object.isSealed(cat)); // true
