import chalk from 'chalk';
const { bgRed, bgGreen, bgBlue } = chalk;

const myPromise = new Promise((resolve, reject) => {
  // Both of these trigger the catch block
  reject('no 1!');
  throw new Error('no 2!');

  // resolve('yes!');
});

myPromise
  .then((res) => console.log(bgGreen('success:'), res))
  .catch((err) => console.error(bgRed('error:'), err))
  .finally(() => console.log(bgBlue('all done!')));

//*--------------------------------------

// Alt syntax, can supply catch block as the second argument of then() function
myPromise.then(
  (res) => {
    console.log(bgGreen('success:'), res);
  },
  (err) => {
    console.error(bgRed('error:'), err);
  }
);

//*--------------------------------------

const pendingPromise = new Promise((resolve, reject) => {});

console.log('pending promise:', pendingPromise); // Promise { <pending> }
