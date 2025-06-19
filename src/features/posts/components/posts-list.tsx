import { Comments } from '@/features/comments/components/comments';
import { usePosts } from '../api/get-posts';
import { DeletePost } from './delete-post';
import { Reactions } from '@/features/reactions/components/reactions';
import { PostReactors } from './post-reactors';
import { Post } from './post';
import { Stack } from '@mantine/core';
import { ReactionSummary } from './reaction-summary';
import { ReactionIcons } from './reaction-icons';

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
      {posts.map((post) => (
        <Stack
          key={post.PostID}
          style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}
        >
          <Post
            author={post.AuthorFirstName + ' ' + post.AuthorLastName}
            content={post.Content}
            createdAt={post.CreateTime}
            avatarUrl={post.AuthorAvatarUrl}
            deleteSection={<DeletePost postId={post.PostID} authorId={post.AuthorID} />}
            postReactorsSection={
              <PostReactors
                postId={post.PostID}
                reactionSummary={
                  <ReactionSummary
                    lastReactor={post.LastReactionAuthor}
                    totalReactions={post.TotalReactions}
                  />
                }
                reactionIcons={<ReactionIcons reactions={post.Reactions} />}
              />
            }
            reactionsSection={
              <>
                <Reactions postId={post.PostID} userReaction={post.UserReaction} />
                <Comments postId={post.PostID} />
              </>
            }
          />
        </Stack>
      ))}
    </div>
  );
};
