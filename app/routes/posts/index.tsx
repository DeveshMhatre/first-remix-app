import { useLoaderData } from 'remix';

export const loader = () => {
  return [
    {
      slug: 'first-post',
      title: 'My First Post',
    },
    {
      slug: 'second-first',
      title: 'My Second Post',
    },
  ];
};

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};

export default Posts;
