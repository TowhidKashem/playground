import chalk from 'chalk';
const { bgRed } = chalk;

// tldr; use Promise.allSettled() when it's okay for some promises to resolve even if others fail

// Promise.allSettled() returns a promise that ALWAYS resolves after all of the given promises have either fulfilled or rejected
// Therefore it doesn't require a catch() block to handle possible rejection. It resolves with an array of objects of the shape
// `{ status: <fulfilled|rejected>, [value|reason]: <value|reason> }` which describes the outcome of each individual's promise

const promise1 = Promise.resolve('Resolved 1!');
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Resolved 2!'), 1000);
});
const promise3 = Promise.reject('Rejected!');

const [res1, res2, res3] = await Promise.allSettled([
  promise1,
  promise2,
  promise3
]);

// [
//   { status: 'fulfilled', value: 'Resolved 1!' },
//   { status: 'fulfilled', value: 'Resolved 2!' },
//   {
//     status: 'rejected',
//     reason: Error: Rejected!
//   }
// ]
console.log(res1, res2, res3);

// Handle errors this way
if (res3.status === 'rejected') {
  console.log(bgRed('promise3 rejected for reason:'), res3.reason);
}
