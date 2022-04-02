import fetch from 'node-fetch';
import chalk from 'chalk';
const { bgRed, bgGreen } = chalk;

// tldr; use Promise.all() when you need all promises to resolve or none at all

// Promise.all() returns an array of the individual promise's responses, if any of the promises reject then they all reject

// it waits until all the promises have resolved before returning
const promise1 = Promise.resolve('Resolved 1!');
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Resolved 2!'), 1000);
});

Promise.all([promise1, promise2])
  .then((values) => {
    console.log(bgGreen(values));
  })
  .catch((err) => {
    console.log(bgRed(err));
  });

// but if any of the promises reject, it throws immediately
const promise3 = Promise.reject('Rejected!');

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(bgGreen(values));
  })
  .catch((err) => {
    console.log(bgRed(err));
  });

//*--------------------------------------

// Practical example
const getData = async (url, isDelayed) => {
  if (isDelayed) {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(1500);
  }

  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.slice(0, 1));
};

try {
  const [posts, photos, comments] = await Promise.all([
    getData('https://jsonplaceholder.typicode.com/posts'),
    getData('https://jsonplaceholder.typicode.com/photos', true),
    getData('https://jsonplaceholder.typicode.com/comments')
    // Promise.reject('Rejected!')
  ]);

  console.log(bgGreen('posts'), posts);
  console.log(bgGreen('photos'), photos);
  console.log(bgGreen('comments'), comments);
} catch (err) {
  console.log(bgRed(err));
}
