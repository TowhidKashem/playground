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

//*--------------------------------------

// chained then() blocks can return values from one to the next
const resolvedPromise = () => {
  return new Promise((resolve) => {
    resolve('Resolved!');
  });
};

resolvedPromise()
  .then((resolvedValue) => {
    console.log('resolvedValue:', resolvedValue);
    return 'hello world';
  })
  .then((valueFromLastThenBlock) => {
    console.log('valueFromLastThenBlock:', valueFromLastThenBlock);
  })
  .catch((err) => console.log(err));

// If an error is thrown on any then() block all following then() blocks will be skipped and the catch() block will be triggered
resolvedPromise()
  .then((res) => {
    throw 'Error thrown in the first then block!';
  })
  .then(() => console.log('then block 2')) // Skipped
  .catch((err) => console.log(bgRed('error:'), err));

// If a promise is rejected it won't trigger any of the then() blocks and go straight to catch()
const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    reject('Rejected!');
  });
};

rejectedPromise()
  .then(() => console.log('then block 1')) // Skipped
  .then(() => console.log('then block 2')) // Skipped
  .catch((err) => console.log(bgRed('error:'), err));
