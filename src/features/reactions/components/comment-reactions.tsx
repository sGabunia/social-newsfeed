import { useReactions } from '@/lib/reactions';
import { useToggleCommentReaction } from '../api/toggle-comment-reaction';

type CommentReactionsProps = {
  commentId: number;
  postId: number;
  userReaction?: string;
};

export const ToggleCommnetReactions = ({
  commentId,
  postId,
  userReaction
}: CommentReactionsProps) => {
  const reactionsQuery = useReactions({});
  const reactionsMutation = useToggleCommentReaction({ postId });
  return (
    <div>
      {reactionsQuery.data?.map((reaction) => {
        return (
          <button
            key={reaction}
            style={{
              backgroundColor: userReaction === reaction ? 'lightblue' : 'transparent'
            }}
            onClick={() => {
              reactionsMutation.mutate({ CommentID: commentId, ReactionType: reaction });
            }}
          >
            {reaction}
          </button>
        );
      })}
    </div>
  );
};
