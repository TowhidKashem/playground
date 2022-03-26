import chalk from 'chalk';
const { bgBlue } = chalk;

// tldr; use Promise.race() when you want the results of the fastest promise that either resolves OR rejects
// unlike Promise.any() which only returns the fastest promise that resolves

const promise1 = new Promise((reject) => setTimeout(reject, 100, 'fastest'));
const promise2 = new Promise((resolve) =>
  setTimeout(resolve, 200, 'second fastest')
);
const promise3 = new Promise((resolve) =>
  setTimeout(resolve, 300, 'third fastest')
);

const fastest = await Promise.any([promise1, promise2, promise3]);

console.log(bgBlue('fastest:'), fastest); // fastest
