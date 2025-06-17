import { usePosts } from '../api/get-posts';

export const PostsList = () => {
  const postsQuery = usePosts({});

  if (postsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  const posts = postsQuery.data;

  if (posts?.length === 0) {
    return <div>No posts found.</div>;
  }

  if (!posts) return null;

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.PostID}>
          <p>Lastname: {post.AuthorLastName}</p>
          <p>Name: {post.AuthorFirstName}</p>
        </div>
      ))}
    </div>
  );
};
