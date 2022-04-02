import type { NextApiRequest, NextApiResponse } from 'next';

const posts = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await data.json();
        res.status(200).json({ posts });
      }
      break;
    case 'POST':
      {
        const createPost = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(body.post),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        });
        const result = await createPost.json();
        res.status(200).json({ result });
      }
      break;
    default:
      res.status(405).end();
      break;
  }
};

export default posts;
