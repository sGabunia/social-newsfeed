import { useComments } from '../api/get-comments';

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
    return <p>No comments found for this post.</p>;
  }

  if (!comments) return null;

  return (
    <div>
      <h3>Comments:</h3>
      {comments.map((comment) => (
        <div
          key={comment.CommentID}
          style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '5px' }}
        >
          <p>
            <strong>
              {comment.AuthorFirstName} {comment.AuthorLastName}
            </strong>
          </p>
          <p>{comment.Content}</p>
          {comment.Comments.length > 0 && <h4>Replies:</h4>}
          {comment.Comments.map((reply) => {
            return (
              <div
                key={reply.CommentID}
                style={{ marginLeft: '20px', border: '1px solid #eee', padding: '5px' }}
              >
                <p>
                  <strong>
                    {reply.AuthorFirstName} {reply.AuthorLastName}
                  </strong>
                </p>
                <p>{reply.Content}</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
