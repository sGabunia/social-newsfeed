import { Box } from '@mantine/core';
import { useComments } from '../api/get-comments';
import { CommentView } from './comment';

type CommentsListProps = {
  postId: number;
};

export const CommentsList = ({ postId }: CommentsListProps) => {
  const commentsQuery = useComments({
    postId
  });

  if (commentsQuery.isLoading) {
    return <p>...</p>;
  }

  const comments = commentsQuery.data;
  if (comments?.length === 0) {
    return null;
  }

  if (!comments) return null;

  return (
    <Box>
      {comments.map((comment) => {
        return (
          <Box key={comment.CommentID} style={{ marginLeft: '20px' }}>
            <CommentView comment={comment} />
          </Box>
        );
      })}
    </Box>
  );
};
