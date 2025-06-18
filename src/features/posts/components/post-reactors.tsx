import { useState } from 'react';
import { usePostReactors } from '../api/get-post-reactors';

type PostReactorsProps = {
  postId: number;
};

export const PostReactors = ({ postId }: PostReactorsProps) => {
  const [showReactors, setShowReactors] = useState(false);
  usePostReactors({
    postId,
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
