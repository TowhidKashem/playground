import React from 'react';
import type { NextPage } from 'next';

const Card: NextPage<
  {
    post: Post;
  } & React.HTMLAttributes<HTMLElement>
> = ({ post, ...articleProps }) => {
  const { id, userId, title, body } = post;

  return (
    <article
      {...articleProps}
      className={`mb-3 rounded-md bg-white p-10 text-lg dark:bg-gray-800 ${articleProps.className}`}
    >
      <header>{title}</header>
      <p>{body}</p>
    </article>
  );
};

export default Card;
