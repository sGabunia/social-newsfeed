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
    return <p>Loading comments...</p>;
  }

  const comments = commentsQuery.data;
  if (comments?.length === 0) {
    return null;
  }

  if (!comments) return null;

  return (
    <div>
      <h3>Comments:</h3>
      {comments.map((comment) => {
        return (
          <div key={comment.CommentID} style={{ marginLeft: '20px' }}>
            <CommentView comment={comment} />
          </div>
        );
      })}
    </div>
  );
};
