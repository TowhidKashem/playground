import { useEffect, useState } from "react";

const sleep = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

function Posts() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    await sleep(1000);
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
    setPosts(posts.slice(0, 5));
  }

  useEffect(() => {
    getPosts();
  }, []);

  if (!posts.length) return null;

  return (
    <>
      {posts.map((post: any) => (
        <article key={post.id}>
          <header>{post.title}</header>
          <p>{post.body}</p>
        </article>
      ))}
    </>
  );
}

export default Posts;
