import { useState } from 'react';
import { useCommentReactors } from '../api/get-comment-reactors';

type CommentReactorsProps = {
  commentId: number;
};

export const CommentReactors = ({ commentId }: CommentReactorsProps) => {
  const [showReactors, setShowReactors] = useState(false);
  useCommentReactors({
    commentId,
    queryConfig: {
      enabled: showReactors
    }
  });
  return (
    <div>
      <button onClick={() => setShowReactors((prev) => !prev)}>
        {showReactors ? 'Hide Reactors' : 'Show Reactors'}
      </button>
    </div>
  );
};
