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
      className={`p-10 bg-white rounded-md mb-3 ${articleProps.className}`}
    >
      <header>{title}</header>
      <p>{body}</p>
    </article>
  );
};

export default Card;
