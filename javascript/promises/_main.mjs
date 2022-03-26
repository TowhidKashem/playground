import chalk from 'chalk';
const { bgRed } = chalk;

const myPromise = new Promise((resolve, reject) => {
  // Both of these trigger the catch block
  reject('oh no 1!');
  throw new Error('oh no 2!');
});

myPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(bgRed('error:'), err));
