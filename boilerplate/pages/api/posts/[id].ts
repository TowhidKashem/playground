import type { NextApiRequest, NextApiResponse } from 'next';

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query, method, body, cookies } = req;

  switch (method) {
    case 'GET':
      {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${query.id}`
        );
        const post = await data.json();
        res.status(200).json({
          postId: query.id,
          post
        });
      }
      break;
    case 'PUT':
      const updatePost = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${query.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(body.post),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        }
      );
      const result = await updatePost.json();
      res.status(200).json({
        postId: query.id,
        result
      });
      break;
    // Method Not Allowed
    default:
      res.status(405).end();
      break;
  }
};

export default post;
