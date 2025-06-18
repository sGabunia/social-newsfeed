import type { Comment } from '@/types/api';
import { CreateCommentReply } from './create-comment-reply';
import { DeleteComment } from './delete-comment';
import { ToggleCommnetReactions } from '@/features/reactions/components/comment-reactions';
import { CommentReactors } from './comment-reactors';

export const CommentView = ({ comment }: { comment: Comment }) => {
  return (
    <div>
      <div
        key={comment.CommentID}
        style={{ marginBottom: '10px', border: '1px solid blue', padding: '5px' }}
      >
        <p>
          <strong>
            {comment.AuthorFirstName} {comment.AuthorLastName}
          </strong>
        </p>
        <p>{comment.Content}</p>
        <p>Comment ID: {comment.CommentID}</p>
        {comment.ParentCommentID ? (
          <p>parent comment: {comment.ParentCommentID}</p>
        ) : (
          'no parent comment'
        )}
        <div>
          <CreateCommentReply postId={comment.PostID} commentId={comment.CommentID} />
        </div>
        <div>
          <CommentReactors commentId={comment.CommentID} />
        </div>
        <div>
          <DeleteComment
            commentId={comment.CommentID}
            authorId={comment.AuthorID}
            postId={comment.PostID}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <ToggleCommnetReactions
            commentId={comment.CommentID}
            postId={comment.PostID}
            userReaction={comment.UserReaction}
          />
        </div>
      </div>
      {comment.Comments && comment.Comments.length > 0 ? (
        <div>
          {comment.Comments.map((childComment) => (
            <CommentView key={childComment.CommentID} comment={childComment} />
          ))}
        </div>
      ) : null}
    </div>
  );
};
