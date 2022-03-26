import chalk from 'chalk';
const { bgRed, bgGreen } = chalk;

// tldr; use Promise.any() when you want the results of the fastest promise that resolves and it's okay to drop the rest

// Promise.any() returns an array of the individual promise's responses, if any of the promises reject then they all reject

const promise1 = Promise.reject('wow');
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const fastest = await Promise.any([promise1, promise2, promise3]);

console.log(bgGreen('success:'), fastest); // quick

//*--------------------------------------

const promise4 = Promise.reject('foo');
const promise5 = Promise.reject('bar');
const promise6 = Promise.reject('lol');

Promise.any([promise4, promise5, promise6])
  .then((result) => console.log(result))
  .catch((err) => console.log(bgRed('error:'), err)); // [AggregateError: All promises were rejected]
