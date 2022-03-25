const fetch = require('node-fetch');

async function forbidden403() {
  try {
    const request = await fetch('http://localhost:3000/api/tests');
    const result = await request.json();
    console.log('result:', result);
  } catch (error) {
    console.log('error:', error);
  }
}

// An error server response doesn't trigger the catch block
forbidden403();

async function notFound404() {
  try {
    const request = await fetch(
      'http://localhost:3000/api/non-existent-endpoint'
    );
    const result = await request.json();
    console.log('result:', result);
  } catch (error) {
    console.log('error:', error);
  }
}

// But an error like hitting a non existent endpoint does
// not because the endpoint 404s but because the request.json() part fails after
notFound404();
