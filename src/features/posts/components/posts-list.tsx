import { Comments } from '@/features/comments/components/comments';
import { usePosts } from '../api/get-posts';
import { DeletePost } from './delete-post';

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
        <div
          key={post.PostID}
          style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p>Lastname: {post.AuthorLastName}</p>
              <p>Name: {post.AuthorFirstName}</p>
              <p>Content: {post.Content}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {post.TotalReactions > 0 ? (
                  <p>
                    Likes: {post.LastReactionAuthor} and {post.TotalReactions - 1} others
                  </p>
                ) : null}
                {post.TotalReactions > 0 ? <p>Comments: {post.TotalComments}</p> : null}
              </div>
            </div>
            <div>
              <DeletePost postId={post.PostID} authorId={post.AuthorID} />
            </div>
          </div>
          <div>
            <Comments postId={post.PostID} />
          </div>
        </div>
      ))}
    </div>
  );
};
