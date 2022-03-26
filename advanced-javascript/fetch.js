import fetch from 'node-fetch';

fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
  console.log(response.headers.get('content-type'));
});
