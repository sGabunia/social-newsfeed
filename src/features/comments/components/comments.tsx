import { useState } from 'react';
import { CommentsList } from './comments-list';
import { CreateComment } from './create-comment';

type CommentsProps = {
  postId: number;
};

export const Comments = ({ postId }: CommentsProps) => {
  const [showComments, setShowComments] = useState(false);
  return (
    <div>
      <button onClick={() => setShowComments((prev) => !prev)}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && (
        <>
          <CommentsList postId={postId} />
          <CreateComment postId={postId} />
        </>
      )}
    </div>
  );
};
