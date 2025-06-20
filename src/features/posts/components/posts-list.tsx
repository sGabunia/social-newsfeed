import { Comments } from '@/features/comments/components/comments';
import { usePosts } from '../api/get-posts';
import { DeletePost } from './delete-post';
import { Reactions } from '@/features/reactions/components/reactions';
import { PostReactors } from './post-reactors';
import { Post } from './post';
import { Box, Stack } from '@mantine/core';
import { PostReactionSummary } from './post-reaction-summary';
import { ReactionIcons } from './reaction-icons';
import { PostActions } from './post-actions';
import { PostSkeleton } from './post-skeleton';
import { PostCommenters } from './post-commenters';

export const PostsList = () => {
  const postsQuery = usePosts({});

  if (postsQuery.isLoading) {
    return (
      <Stack>
        {[...Array(3)].map((_, index) => (
          <PostSkeleton key={index} />
        ))}
      </Stack>
    );
  }

  const posts = postsQuery.data;

  if (posts?.length === 0) {
    return (
      <Box ta='center' py='xl'>
        No posts found.
      </Box>
    );
  }

  if (!posts) return null;

  return (
    <Box>
      {posts.map((post) => (
        <Box key={post.PostID} mb='md'>
          <Post
            author={post.AuthorFirstName + ' ' + post.AuthorLastName}
            content={post.Content}
            createdAt={post.CreateTime}
            avatarUrl={post.AuthorAvatarUrl}
            postImage={post.PostFiles?.length ? post.PostFiles[0].FileUrl : undefined}
            deleteSection={<DeletePost postId={post.PostID} authorId={post.AuthorID} />}
            reactorsSection={
              <PostReactors
                postId={post.PostID}
                reactionSummary={
                  <PostReactionSummary
                    lastReactor={post.LastReactionAuthor}
                    totalReactions={post.TotalReactions}
                  />
                }
                reactionIcons={<ReactionIcons reactions={post.Reactions} />}
                commentsSummary={<PostCommenters commenters={post.TotalComments} />}
              />
            }
            actionsSection={
              <PostActions
                reactionSection={
                  <Reactions postId={post.PostID} userReaction={post.UserReaction} />
                }
                commentSection={<Comments postId={post.PostID} />}
              />
            }
          />
        </Box>
      ))}
    </Box>
  );
};
